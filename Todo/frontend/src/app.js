import React, { useState, useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchTodos = async () => {
    const res = await fetch("http://localhost:5000/api/todos");
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const res = await fetch("http://localhost:5000/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });
    const data = await res.json();
    setTodos([data, ...todos]);
    setTitle("");
    setDescription("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Todo List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <button type="submit" style={{ padding: "8px 16px" }}>
          Add Todo
        </button>
      </form>

      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo._id} style={{ marginBottom: "10px" }}>
            <strong>{todo.title}</strong>: {todo.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
