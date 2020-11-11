const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}
const password = process.argv[2]

const url =
  `mongodb+srv://rastogi:${password}@cluster0.r238o.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String
}, { timestamps: true })

const Person = mongoose.model('Person', personSchema)

if (process.argv.length < 4) {
  Person.find()
    .then(persons => {
      console.log('Phonebook:')
      persons.forEach(person => console.log(`${person.name} ${person.number}`))
    })
    .catch(err => console.error(JSON.stringify(err, null, 2)))
    .finally(() => {
      mongoose.connection.close()
      process.exit(1)
    })

  return
}

const name = process.argv[3]

if (process.argv.length < 5) {
  console.log('Please provide the number as an argument: node mongo.js <password> <name> <number>')
  process.exit(1)
}
const number = process.argv[4]

const note = new Person({
  name,
  number
})

note.save().then(() => {
  console.log(`added ${name} number ${number} to phonebook`)
  mongoose.connection.close()
})