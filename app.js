//require('dotenv').config();
//Upload dos módulos
const express = require('express')
const {engine} = require("express-handlebars")
const bodyParser = require('body-parser')
const app = express()
const path = require('path')
const home = require("./controllers/home")

const forAll = require("./routes/forAll") 

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


////ROTAS
//Rotas Externas
app.use("/inicio", home)
app.use("/", forAll)

//Outras Config
const PORT = 8081
app.listen(PORT,() => {
    console.log('servidor rodando!')
})