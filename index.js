import { db } from './db/index.js';
import { todosTable } from './db/schema.js';
import { eq, ilike } from 'drizzle-orm';
import { GoogleGenerativeAI } from '@google/generative-ai';
import readlineSync from 'readline-sync';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  generationConfig: {
    responseMimeType: "application/json"
  }
});

// DB Functions
export async function getAllTodos() {
  try {
    const todos = await db.select().from(todosTable);
    return todos;
  } catch (error) {
    console.error("Error fetching todos:", error);
    throw error;
  }
}

export async function createTodo(todo) {
  try {
    const [result] = await db.insert(todosTable).values({ todo }).returning({
      id: todosTable.id
    });
    return result.id;
  } catch (error) {
    console.error("Error creating todo:", error);
    throw error;
  }
}

export async function searchTodo(id) {
  try {
    const todo = await db
      .select()
      .from(todosTable)
      .where(eq(todosTable.id, id));
    return todo[0];
  } catch (error) {
    console.error("Error fetching todo by ID:", error);
    throw error;
  }
}

export async function searchTodos(search) {
  try {
    const results = await db
      .select()
      .from(todosTable)
      .where(ilike(todosTable.todo, search));
    return results;
  } catch (error) {
    console.error("Error searching todos:", error);
    throw error;
  }
}

export async function deleteTodoById(id) {
  try {
    const deleted = await db
      .delete(todosTable)
      .where(eq(todosTable.id, id));
    return deleted;
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw error;
  }
}

export async function updateTodo({ id, newTodo }) {
  try {
    const updated = await db
      .update(todosTable)
      .set({ todo: newTodo, updatedAt: new Date() })
      .where(eq(todosTable.id, id));
    return updated;
  } catch (error) {
    console.error("Error updating todo:", error);
    throw error;
  }
}

const tools = {
  getAllTodos,
  createTodo,
  deleteTodoById,
  searchTodo,
  searchTodos,
  updateTodo
};

const SYSTEM_PROMPT = `
You are an AI To-Do List Assistant with START, PLAN, ACTION, Observation and Output State.
Wait for the user prompt and first PLAN using available tools.
After Planning, Take the action with appropriate tools and wait for Observation based on Action.
Once you get the observations, Return the AI response based on START prompt and observations!

You can manage tasks by adding, viewing, updating, and deleting.
You must strictly follow the JSON output format.

To-Do DB Schema:
id: Int and Primary key
todo: String
createdAt: Date Time
updatedAt: Date Time

Available Tools:
- getAllTodos(): Returns all the Todos from Database
- createTodo(todo: string): Creates a new Todo in DB and returns the ID
- deleteTodoById(id: string): Deletes the todo by the given ID
- searchTodo(id: string): Searches for a todo by exact ID
- searchTodos(search: string): Searches todos containing the given string (case-insensitive)
- updateTodo({ id: string, newTodo: string }): Updates the todo content by given ID

EXAMPLE 
START:
{ "type": "user", "user": "Add a task for shopping groceries." }
{ "type": "plan", "plan": "I will try to get more context on what user needs to shop." }
{ "type": "output", "output": "Can you tell me what all items you want to shop for? " }
{ "type": "user", "user": "I want to shop for milk, kurkure, lays and choco." }
{ "type": "plan", "plan": "I will use createTodo to create a new Todo in DB." }
{ "type": "action", "function": "createTodo", "input": "Shopping for milk, kurkure, lays and choco." }
{ "type": "observation", "observation": "2" }
{ "type": "output", "output": "Your Todo has been added successfully." }

START:
{ "type": "user", "user": "Change the todo with ID 3 to 'Go for a run at 6 AM'" }
{ "type": "plan", "plan": "I will use updateTodo to update the specified task." }
{ "type": "action", "function": "updateTodo", "input": { "id": "3", "newTodo": "Go for a run at 6 AM" } }
{ "type": "observation", "observation": "1" }
{ "type": "output", "output": "Todo updated successfully." }
`;

const messages = [{
  role: 'user',
  parts: [{ text: SYSTEM_PROMPT }]
}];

async function main() {
  while (true) {
    try {
      const query = readlineSync.question(' >> ');

      await new Promise(resolve => setTimeout(resolve, 1000));

      const userMessage = {
        type: 'user',
        user: query
      };

      messages.push({
        role: 'user',
        parts: [{ text: JSON.stringify(userMessage) }]
      });

      while (true) {
        try {
          const result = await model.generateContent({
            contents: messages
          });

          const response = result.response;
          const text = response.text();
          messages.push({
            role: 'model',
            parts: [{ text }]
          });

          const action = JSON.parse(text);

          if (action.type.toLowerCase() === 'output') {
            console.log(action.output);
            break;
          } else if (action.type.toLowerCase() === 'action') {
            const fn = tools[action.function];
            if (!fn) {
              throw new Error(`Invalid action: ${action.function}`);
            }

            // Ensure proper parsing of structured inputs
            const input = typeof action.input === 'string' && fn.name === 'updateTodo'
              ? JSON.parse(action.input)
              : action.input;

            const observation = await fn(input);
            const observationMessage = {
              type: 'observation',
              observation: observation
            };

            messages.push({
              role: 'user',
              parts: [{ text: JSON.stringify(observationMessage) }]
            });
          }
        } catch (error) {
          console.error("Error in API call:", error);
          break;
        }
      }
    } catch (error) {
      console.error("Error in main loop:", error);
    }
  }
}

main();
