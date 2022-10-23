const ServiceOperacao = require ("../service/ServiceOperacao.js")
class operacoes {
    static router(app){
        app.get("/somar",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceOperacao.somar(...numeros)
            res.send(`<h2>${response}</h2>`)
        })


        app.get("/subtrair",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceOperacao.subtrair(...numeros)
            res.send(`<h2>${response}</h2>`)
        })


        app.get("/multiplicar",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceOperacao.multiplicar(...numeros)
            res.send(`<h2>${response}</h2>`)
        })

        
        app.get("/dividir",(req, res)=>{
            const query = req.query
            const numeros = Object.values(query)
            const response = ServiceOperacao.dividir(...numeros)
            res.send(`<h2>${response}</h2>`)
        })
    }
}

module.exports=operacoes