const express = require('express')
const app = express()

const path = require('path')

let HTTPDOMAIN

// if (process.env.NODE_ENV === 'production') {
//     // redirects HTTP to HTTPS
//     app.enable('trust proxy')
//     app.use((req, res, next) => {
//         HTTPDOMAIN = `https://${req.headers.host}${req.url}`
//         req.secure ? next() : res.redirect(HTTPDOMAIN)
//     })
// } else {
//     require('dotenv').config() // set .ENV
//     HTTPDOMAIN = 'http://localhost'
// }

// saving ROOT DIR into globals to use in other routes
global.__basedir = __dirname

// set the view engine to ejs
app.set('view engine', 'ejs')

app.use(express.static(__dirname+'/'))
// uses URLENCODED for body parsing
app.use(express.urlencoded({ extended: true }))





app.get("/", (req, res) => {
    res.send("index.html")
})

app.get("/about", (req, res) => {
    res.send("This will be a page about our team!!!")
})




const PORT = process.env.PORT || 5000
const server = app.listen(PORT, console.log(`${HTTPDOMAIN}:${PORT}`))
