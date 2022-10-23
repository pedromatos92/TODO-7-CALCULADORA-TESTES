const express = require ("express")
const operacoes = require ( "./controller/operacoes.js")


const app = express ()
app.listen ("3002",()=>{
    console.log ( "its alive")
})

operacoes.router(app)