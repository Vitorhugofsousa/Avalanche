const express = require('express')
const router =  express.Router()

router.get('/', (req, res)=>{
    res.render('pages/home')
})

router.get('/sobre', (req, res)=>{
    res.render('pages/sobre')
})
router.get('/contato', (req, res)=>{
    res.render('pages/contato')
})

router.get('/cadastrar', (req, res)=>{
    res.render('pages/cadastro')
})
router.get('/entrar', (req, res)=>{
    res.render('pages/entrar')
})




module.exports = router