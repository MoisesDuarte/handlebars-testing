// Importing required libraries
const express = require('express')
const exphbs = require('express-handlebars')

// Creating an express app
const app = express()

// Configuring handlebars as view engine
app.engine('hbs', exphbs({
    defaultLayout: 'main', // Application styling base
    extname: '.hbs' // Shortening handlebar extension name for convenience
}))

app.set('view engine', 'hbs')

// Request handling (routes)
app.get('/', (req, res) => {
    res.render('home', {
        post: {
            image: 'https://picsum.photos/300/300',
            name: 'Story One',
            description: 'This is an horror story',
            comments: []
        }
    });
})

// Listening port
app.listen(3000, () => {
    console.log('Web server listening on port 3000')
})