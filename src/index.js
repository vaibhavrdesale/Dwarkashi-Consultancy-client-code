const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs')
const port = process.env.PORT || 3000;


const static_path = path.join(__dirname,'../public');
const view_template_path = path.join(__dirname,'../templates/views')
const partials_template = path.join(__dirname,'../templates/partials')

app.use(express.static(static_path));
app.set('view engine','hbs');
app.set('views', view_template_path);
hbs.registerPartials(partials_template);


app.get('/', (req, res) => {
    res.render("index")
})
app.get('/about', (req, res) => {
    res.render("about")
})
app.get('/services', (req, res) => {
    res.render("services")
})
app.get('/team', (req, res) => {
    res.render("team")
})
app.get('/contact', (req, res) => {
    res.render("contact")
})
app.get('/iso-service', (req, res) => {
    res.render("iso-service")
})
app.get('/magma-service', (req, res) => {
    res.render("magma-service")
})
app.get('/creo-service', (req, res) => {
    res.render("creo-service")
})
app.get('/casting-service', (req, res) => {
    res.render("casting-service")
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})





