# MERN-TEST-KUNAL-BHARGAV

Section 1: Frontend (React)

Task 1.1 – Multiple Choice (5 mins)
Question:
Which React hook is used to manage component state?
a) useEffect
b) useState 
c) useContext
d) useReducer

Answer :- (b) useState


Task 1.2 – Problem Solving (10 mins)
Scenario:
You need to fetch data from https://api.example.com/users and display it in a list.
Explain in writing:
• How you would structure the component.
-> I would create a functional React component, for example UsersList and in this component I would create a UserItem component that have the details of users and UsersList component is using UserItem for rendering the details of per user in list items.
• Which lifecycle method/hook you’d use.
-> I would use the useEffect hook. useEffect with an empty dependency array ([]) runs once when the component mounts. it will not re-render the page again and again.
• How you’d handle loading and error states.
-> Loading and error states are handled using conditional rendering. When loading is true, the component displays a “Loading…” message to inform the user that data is being fetched. If an error occurs, the component renders the error message using error.message.

Solution of this task -> goto Frontend-> src -> components -> UserItem.jsx and UserList.jsx
In Frontend -> src -> App.jsx uncomment this components (UserItem.jsx and UserList.jsx) and you can run the task.


Task 1.3 – Coding (15 mins)
Problem:
Create a React component called Counter with:
• A button to increment the count.
• A button to reset the count to 0.
• Display the current count.
Requirements:
• Use functional components and hooks.
• Write clean, readable code.


Solution of this task -> goto Frontend-> src -> components -> Counter.jsx
In Frontend -> src -> App.jsx uncomment this components (Counter.jsx) and you can run the task.






Section 2: Backend (Node.js/Express)

Task 2.1 – Multiple Choice (5 mins)
Question:
What does app.use(express.json()) do in Express?
a) Parses HTML forms
b) Parses JSON request bodies
c) Serves static files
d) Handles cookies

Answer :- (b) Parses JSON request bodies


Task 2.2 – API Design (10 mins)
Scenario:
Design a REST API endpoint to delete a user by ID.
Include:
• HTTP method
• Route structure
• Sample request/response format

Solution of this task on goto Backend Folder -> RestAPI


Task 2.3 – Coding (5 mins)
Problem:
Write an Express server that:
• Listens on port 4000.
• Responds with { "message": "Server is running" } for GET /status.

Solution of this task on goto Backend Folder -> ExpressServer -> expressServer.js





Section 3: Database (MongoDB) | 10 Minutes
Task 3.1 – MCQ (3 mins)
Question:
In MongoDB, what is a document?
a) A table
b) A row in a table
c) A JSON-like data structure
d) A schema validator

Answer :- (c) A JSON-like data structure


Task 3.2 – Schema Design (7 mins)
Problem:
Design a Mongoose schema for a BlogPost with:
• title (string, required, max 100 chars).
• content (string, required).
• tags (array of strings).
• createdAt (defaults to current date).

Solution of this task on goto Backend Folder -> Mongoose -> BlogPost.js





Section 4: Full-Stack Integration | 30 Minutes
Problem:
Build a Todo List App with:
• Frontend (React): Form to add a todo (title, description). Display todos in a list.
• Backend (Express):
o POST endpoint to save a todo to MongoDB.
o GET endpoint to fetch all todos.
• Database: MongoDB collection for todos.

Solution of this task go to Todo Folder, In that backend is written in backend folder and frontend is written in frontend folder.

to run frontend goto frontend folder -> npm intall -> npm start
to run backend goto backend folder -> npm install -> npm run dev





