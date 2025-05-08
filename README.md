

```markdown
# AI To-Do List Agent

A CLI tool that uses Google Gemini to manage your to-do list through natural language commands.

## Quick Start

1. Clone repo and install dependencies:
```bash
git clone https://github.com/Ansh642/AgenticAI.git
cd ai-todo-agent
npm install
```

2. Create `.env` file:
```env
GOOGLE_API_KEY=your_key_here
DATABASE_URL=postgres://user:pass@localhost:5432/todos
```

3. Start the agent:
```bash
node index.js
```

## How to Use

Type natural language commands:
- "Add buy milk to my list"
- "Show all tasks"
- "Update task 3 to 'Workout at 6pm'"
- "Delete task 5"

## Requirements
- Node.js 18+
- PostgreSQL
- Google Gemini API key

## Commands
| Command       | Example                     |
|---------------|-----------------------------|
| Add task      | "Add dentist appointment"   |
| List tasks    | "Show all todos"            |
| Update task   | "Change task 2 to 'Read'"   |
| Delete task   | "Remove task 3"             |
| Search        | "Find tasks with 'meeting'" |
```

This version:
- Uses clean markdown formatting
- Has minimal but essential sections
- Includes a handy command reference table
- Provides copy-paste ready setup instructions
- Is properly spaced for good GitHub rendering

