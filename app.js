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
        posts: [
            {
                image: 'https://picsum.photos/300/300?random=1',
                name: 'Story One',
                description: 'This is an horror story',
                comments: [
                    'First!',
                    'The first one is a loser!',
                    'Space, the final frontier!'
                ]
            },
            {
                image: 'https://picsum.photos/300/300?random=2',
                name: 'Story Two',
                description: 'This is an mysterious story',
                comments: [ ]
            },
            {
                image: 'https://picsum.photos/300/300?random=3',
                name: 'Story Three',
                description: 'This is an adventurous story',
                comments: [
                    'This one sucks!',
                    'You are the one who sucks!'
                ]
            },
        ]
    });
})

// Listening port
app.listen(3000, () => {
    console.log('Web server listening on port 3000')
})