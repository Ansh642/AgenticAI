
# 🧠 AI Agentic To-Do App

A smart to-do list application powered by Google's Gemini AI, built using Node.js, Drizzle ORM, and PostgreSQL. This app lets users manage tasks using natural language input through an agentic workflow: **Plan → Action → Observation → Output**.

---

## 🚀 Features

- Natural language task management  
- Gemini 1.5 Flash AI integration  
- Drizzle ORM with PostgreSQL  
- Agentic loop: Plan → Action → Observation → Output  
- CLI-based interaction  

---

## 🛠 Tech Stack

- Node.js + readline-sync  
- Drizzle ORM  
- PostgreSQL (via Docker)  
- Google Generative AI (Gemini)  
- dotenv  
- pnpm  

---

## 📦 Setup

1. Clone the repo & install dependencies:

```bash
git clone https://github.com/Ansh642/Ai-todo-agent.git
cd ai-agentic-todo
pnpm install
```

2. Create a `.env` file:

```env
GOOGLE_API_KEY=your_google_api_key
DATABASE_URL=postgresql://postgres:admin@localhost:5431/admin
```


3. Start PostgreSQL via Docker:

```bash
docker compose up -d
```

4. Push schema with Drizzle:

```bash
pnpm drizzle-kit push
```

5. (Optional) Open Drizzle Studio:

```bash
pnpm studio
```

6. Start the application:

```bash
node index.js
```

---

## 💬 Example Interaction

```bash
>> Add a task to buy groceries
✅ Your Todo has been added successfully.
```

---

## 👤 Author

**Ansh Agarwal**
📧 [anshagarwal642@gmail.com](mailto:anshagarwal642@gmail.com)
🔗 [GitHub](https://github.com/Ansh642) | [LinkedIn](https://www.linkedin.com/in/ansh-agarwal-b830b3218)

---
