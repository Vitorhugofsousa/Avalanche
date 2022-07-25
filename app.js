require('dotenv').config();
//Upload dos módulos
const express = require('express')
const {engine} = require("express-handlebars")
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const home = require("./controllers/home")

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
app.get('/', (req, res)=>{
    res.render('pages/home')
})

app.get('/sobre', (req, res)=>{
    res.render('pages/sobre')
})
app.get('/contato', (req, res)=>{
    res.render('pages/contato')
})


//Rota Externa
app.use("/inicio", home)

//Outras Config
app.listen(process.env.PORT,() => {
    console.log('servidor rodando!')
})