
```markdown
# TaskFlowAI – AI-Powered To-Do Assistant

TaskFlowAI is an intelligent CLI to-do application that uses Google's Gemini AI and PostgreSQL to manage tasks through natural language commands.

## Features
- Natural language task management (add/view/update/delete)
- AI agentic reasoning (PLAN → ACT → OBSERVE → RESPOND)
- Full CRUD operations with search functionality
- PostgreSQL database with Drizzle ORM
- Interactive CLI interface

## Quick Start

1. Clone repo:
```bash
git clone https://github.com/your-username/taskflow-ai.git
cd taskflow-ai
```

2. Install dependencies:
```bash
pnpm install
```

3. Create `.env` file:
```
GOOGLE_API_KEY=your_api_key_here
```

4. Run the app:
```bash
pnpm start
```

## Example Commands
```
"Add 'Buy groceries at 5pm' to my todos"
"Show all tasks due today"
"Delete task number 3"
"Update task 2 to 'Meeting at 2pm tomorrow'"
"Search for 'email' in my tasks"
```

## Project Structure
```
db/
  index.js    # DB connection
  schema.js   # Todo schema
index.js      # Main application
```

## Tech Stack
- Node.js
- PostgreSQL
- Drizzle ORM
- Google Gemini AI
- pnpm

## Author
Ansh Agarwal  
[Portfolio](https://my-portfolio-rosy-five.vercel.app/) | 
[GitHub](https://github.com/Ansh642)

