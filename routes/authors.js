const express = require('express')
const router = express.Router() //zavolání routeru
const Author = require('../models/author') //zavolání modelu

//Volání /author spustí tento router

// All author route
router.get('/', async (req, res) => {
    let searchOptions = {}
    if(req.query.name != null && req.query.name !== ''){
        searchOptions.name = new RegExp(req.query.name.trim(), 'i') //i znamená, že nezáleží na velikosti písmen
    }    
    try{
        const authors = await Author.find(searchOptions) //žádné požadavky v {} = najde všechny objekty
        res.render('authors/index', {
            authors: authors, 
            searchOptions: req.query
        })
    } catch {
        res.redirect('/')
    }
})

// New author route - při zavolání /author/new
router.get('/new', (req, res) => {
    res.render('authors/new', {
        author: new Author()
    })
})

// Create author route
router.post('/', async (req, res) => {
    const author = new Author({
        name: req.body.name
    })
    try { //zkusit
        const newAuthor = await author.save() // čeká na dokončení ukládání
        // res.redirect(`authors/${newAuthor.id}`)
        res.redirect(`authors`)
    } catch { //pokud bude error
        res.render('authors/new', {
                        author: author,
                        errorMessage: 'Error creating author!'
                    })
    }
})

module.exports = router //export routeru = propojení se server.js