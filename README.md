```md
# 🚀 TaskFlowAI – Your Agentic AI To-Do Assistant

**TaskFlowAI** is an intelligent, AI-powered CLI-based to-do application that helps you manage tasks using natural language. Built with Google's Gemini AI and backed by a PostgreSQL database via Drizzle ORM, this app uses agentic reasoning to PLAN, ACT, OBSERVE, and RESPOND to your queries in a human-like way.

---

## 🧠 Features

- 🤖 AI agent using Gemini 1.5 Flash (Generative AI)
- 📋 Add, view, update, and delete to-dos with natural commands
- 🔍 Search todos by keyword or exact ID
- 🧠 Uses agentic reasoning: START → PLAN → ACTION → OBSERVATION → OUTPUT
- ⚡ Fully interactive CLI experience
- 🧩 Modular architecture with tools for each DB operation

---

## 🗂️ Project Structure

```
.
├── db/
│   ├── index.js         # Database connection (Drizzle ORM)
│   └── schema.js        # Todo table schema
├── index.js             # Main AI logic and tool integration
├── .env                 # Environment variables (API key)
└── README.md
```

---

## ⚙️ Tech Stack

- **Node.js**
- **pnpm**
- **PostgreSQL**
- **Drizzle ORM**
- **Google Generative AI (Gemini 1.5 Flash)**
- **readline-sync**
- **dotenv**

---

## 🧠 Agentic Reasoning Flow

```text
User Input ➡️ PLAN ➡️ ACTION (via Tool) ➡️ OBSERVATION ➡️ OUTPUT
```

### 💡 Example Interaction

```json
{ "type": "user", "user": "Update todo 4 to 'Call doctor at 5 PM'" }
{ "type": "plan", "plan": "I will use updateTodo to change this task." }
{ "type": "action", "function": "updateTodo", "input": { "id": "4", "newTodo": "Call doctor at 5 PM" } }
{ "type": "observation", "observation": "1" }
{ "type": "output", "output": "Todo updated successfully." }
```

---

## 🔧 Available Tools

- `getAllTodos()`: Returns all todos from the DB
- `createTodo(todo: string)`: Adds a new todo
- `deleteTodoById(id: string)`: Deletes a todo by ID
- `searchTodo(id: string)`: Finds a todo by exact ID
- `searchTodos(search: string)`: Searches todos containing the keyword
- `updateTodo({ id, newTodo })`: Updates a todo's text

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/taskflow-ai.git
cd taskflow-ai
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Environment Variables

Create a `.env` file in the root:

```
GOOGLE_API_KEY=your_google_generative_ai_key
```

### 4. Run the App

```bash
pnpm start
```

---

## 🧪 Try These Commands in CLI

```
>> Add a todo for "Submit the assignment"
>> Show all todos
>> Delete the todo with ID 3
>> Search todos for the word 'meeting'
>> Update todo 2 to "Meeting with client at 4 PM"
```

---

## 🙌 Author

Made with ❤️ by [Ansh Agarwal](https://www.linkedin.com/in/ansh-agarwal-b830b3218/)  
[Portfolio](https://my-portfolio-rosy-five.vercel.app/) • [GitHub](https://github.com/Ansh642)

---


> ✨ Empower your productivity with TaskFlowAI – Where your tasks meet intelligence.
```
