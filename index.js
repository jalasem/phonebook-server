const { request } = require("express");
const express = require("express");
const morgan = require('morgan')
const app = express();

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-53235323",
  },
  {
    id: 3,
    name: "Dan Abrmov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendick",
    number: "39-23-6423122",
  },
];

app.get("/api/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons/:id", (req, res) => {
  const { id: personId } = req.params;
  const person = persons.find((p) => p.id === Number(personId));
  if (!person)
    return res
      .status(404)
      .send({ error: `person with id: "${personId}" not found` });

  res.json(person);
});

app.post("/api/persons", (req, res) => {
  const { number, name } = req.body;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: '"name" is required' });
  }
  if (!number || typeof number !== "string") {
    return res.status(400).json({
      error: '"number" is required',
    });
  }
  if (
    persons.find((person) => person.name.toLowerCase() === name.toLowerCase())
  ) {
    return res.status(409).json({
      error: '"name" must be unique',
    });
  }

  const newPerson = {
    name,
    number,
    id: Math.max(...persons.map((p) => p.id)) + 1,
  };
  persons = persons.concat(newPerson);
  res.status(201).json(newPerson);
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);

  const person = persons.find((p) => p.id === Number(id));
  if (!person)
    return res.status(404).json({
      error: `person with id: "${personId}" has been removed or does not exist`,
    });

  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

app.patch("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((p) => p.id === Number(id));
  if (!person)
    return res.status(404).json({
      error: `person with id: "${id}" has been removed or does not exist`,
    });

  const { name, number } = req.body;
  if (!name && !number)
    return res.status(400).json({ error: '"name" or "number" is required' });

  if (name) person.name = name;
  if (number) person.number = number;

  persons = persons.map((p) => {
    if (p.id === id) p = person;
    return p;
  });

  res.json(person);
});

app.get("/api/info", (req, res) => {
  res.send(`<p>Phonebook has info for ${persons.length} people</p>
  <p>${new Date().toDateString()}</p>`);
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
