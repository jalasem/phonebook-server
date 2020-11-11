const { model, Schema } = require('mongoose')

const personSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  }
}, { timestamps: true })

module.exports = model('Person', personSchema)
