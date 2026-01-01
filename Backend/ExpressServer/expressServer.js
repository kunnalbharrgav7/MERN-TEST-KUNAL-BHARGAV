import express from "express";

const app = express();
const PORT = 4000;

app.get("/status", (request, response) => {
  response.json({ message: "Server is running" });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
