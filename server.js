// Pokud se nenacházíme v produkčním režimu, tak načte vývojové proměnné
if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express() //vytvoření express aplikace
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

// Nalinkování routerů
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/authors')

app.set('view engine', 'ejs') //nastavení ejs jako náš view engine
app.set('views', __dirname + '/views') //umístění ejs view souborů
app.set('layout','layouts/layout') //umístění šablony stránky
app.use(expressLayouts)
app.use(express.static('public')) //nastavení veřejného adresáře
app.use(bodyParser.urlencoded({limit: '10mb', extended: false}))

const mongoose = require('mongoose')
//načtení url databáze z nastavení webu, u local to bude ze souboru .env
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
})

const db = mongoose.connection //připojení k databázi
db.on('error', error => console.error(error)) //při chybě ji vypíše
db.once('open', () => console.log('Connected to Mongoose')) //zpráva při úspěšném připojení

app.use('/', indexRouter) //jako výchozí se použije router index.js ve složce routes
app.use('/authors', authorRouter)

app.listen(process.env.PORT || 3000) //pokud budeme na localhostu, bude výchozí port 3000