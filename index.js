const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

const classroom = [
  "Billy",
  "Julia",
  "Moran",
  "Oerd",
  "Bryan",
  "Arne",
  "Kenneth",
  "Jessica",
];

app.get("/", (req, res) => {
  res.send("IT WORKS!");
});

// Path to get some info from the backend
app.get("/students", (req, res) => {
  res.json(classroom);
});

// Path to post some info at the backend
app.post("/students", (req, res) => {
  console.log("hello from the backend!! :D :D", req.body.user);
  let newStudent = req.body.user;

  classroom.push(newStudent);
  res.sendStatus(201);
});

app.listen(port, () =>
  console.log(`Backend server is running at port: ${port}`)
);
