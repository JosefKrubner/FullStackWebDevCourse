if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express() //vytvoření express aplikace
const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')

app.set('view engine', 'ejs') //nastavení ejs jako náš view engine
app.set('views', __dirname + '/views') //umístění ejs view souborů
app.set('layout','layouts/layout') //umístění šablony stránky
app.use(expressLayouts)
app.use(express.static('public')) //nastavení veřejného adresáře

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter) //jako výchozí se použije router index.js ve složce routes

app.listen(process.env.PORT || 3000) //pokud budeme na localhostu, bude výchozí port 3000