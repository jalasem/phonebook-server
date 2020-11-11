const { Person } = require('../models')
const personRouter = require('express').Router()

personRouter.get("/", async (req, res) => {
  try {
    const persons = await Person.find()

    res.json(persons)
  } catch (err) {
    console.error({ err });
    res.status(500).send("Error occured");
  }
});

personRouter.get("/:id", async (req, res) => {
  const { id } = req.params
  try {
    const person = await Person.findById(id)
    if (!person)
        return res
          .status(404)
          .send({ error: `person with id: "${id}" not found` });

    res.json(person);
  } catch (err) {
    console.error({ err });
    res.status(500).send("Error occured");
  }
});

personRouter.post("/", async (req, res) => {
  const { number, name } = req.body;
  if (!name || typeof name !== "string") {
    return res.status(400).json({ error: '"name" is required' });
  }
  if (!number || typeof number !== "string") {
    return res.status(400).json({
      error: '"number" is required',
    });
  }

  try {
    const person = await Person.findOne({ name })
    if (person)
        return res.status(409).json({
          error: '"name" must be unique',
        });

    const newPerson = await new Person({
      name,
      number,
    }).save()

    res.status(201).json(newPerson)
  } catch (err) {
    console.error({ err });
    res.status(500).send("Error occured");
  }
});

personRouter.delete("/:id", async (req, res) => {
  try {
    await Person.findOneAndRemove(req.params.id)
    res.status(204).end();
  } catch (err) {
    console.error({ err });
    res.status(500).send("Error occured");
  }
});

personRouter.patch("/:id", async (req, res) => {
  const { id } = req.params
  try {
    let person = await Person.findById(id);
    if (!person)
      return res.status(404).json({
        error: `person with id: "${id}" has been removed or does not exist`,
      });

    const { name, number } = req.body;
    if (!name && !number)
      return res.status(400).json({ error: '"name" or "number" is required' });

    if (name) person.name = name;
    if (number) person.number = number;

    person = await person.save();
    res.json(person);
  } catch (err) {
    console.error({ err });
    res.status(500).send("Error occured");
  }
});

personRouter.get("/info", async (req, res) => {
  try {
    const personCount = await Person.countDocuments();

    res.send(`<p>Phonebook has info for ${personCount} people</p>
<p>${new Date().toDateString()}</p>`);
  } catch (err) {
    console.error({ err });
    res.status(500).send("Error occured");
  }
});

module.exports = personRouter
