const mongoose = require('mongoose')

//Definování tabulky z databáze
const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', authorSchema)