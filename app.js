//Upload dos módulos
const express = require('express')
const {engine} = require("express-handlebars")
const bodyParser = require('body-parser')
const app = express()
const path = require('path')



//configurações dos módulos


//middleware

//body-Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//handlebars
app.engine('handlebars', engine({defaultLayout: 'main',  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},}))
app.set('view engine', 'handlebars');

//sequelize


//public
app.use(express.static(path.join(__dirname, "public")))

//Rotas
app.get('/', function(req, res){
    res.render('pages/home')
  })


//Outras Config
const PORT = 8081
app.listen(PORT,() => {
    console.log('servidor rodando!')
})