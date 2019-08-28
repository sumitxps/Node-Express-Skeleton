

const expressLayouts = require("express-ejs-layouts");
const express = require('express')
const app = express()
const port = 3000

app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get('/', (req, res) => res.render('index', {layout: false}))

app.get('/test', (req, res) => res.send('Test!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))