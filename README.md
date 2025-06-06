
````markdown
# 🧠 AI Agentic To-Do App

A smart to-do list app where users interact using natural language. Powered by Google's Gemini AI, Node.js, Drizzle ORM, and PostgreSQL, the app understands your input, plans actions, and manages tasks through CRUD operations.

## 🚀 Features

- Natural language task management
- Gemini 1.5 Flash AI integration
- Drizzle ORM with PostgreSQL
- Agentic loop: Plan → Action → Observation → Output
- CLI-based interaction

## 🛠 Tech Stack

- Node.js + readline-sync
- Drizzle ORM
- PostgreSQL (via Docker)
- Google Generative AI (Gemini)
- dotenv

## 📦 Setup

1. Clone the repo & install dependencies  
```bash
git clone <your-repo-url>
cd ai-agentic-todo
npm install
````

2. Create `.env` file

```
GOOGLE_API_KEY=your_google_api_key
DATABASE_URL=postgresql://postgres:admin@localhost:5431/admin
```

3. Run PostgreSQL using Docker

```bash
docker compose up -d
```

4. Apply schema with Drizzle

```bash
npx drizzle-kit push
```

5. Start the app

```bash
node index.js
```

## 💬 Example

```
>> Add a task to buy groceries
✅ Your Todo has been added successfully.
```

## ✨ Author

[Ansh Agarwal](https://github.com/Ansh642)
📧 [anshagarwal642@gmail.com](mailto:anshagarwal642@gmail.com)

```

