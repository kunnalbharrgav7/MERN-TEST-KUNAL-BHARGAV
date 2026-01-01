import Todo from "../models/Todo.js";

export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "Title and description required" });
    }

    const todo = await Todo.create({ title, description });
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
