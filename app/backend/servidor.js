const port = 8080
const express = require('express')
const app = express()

const {uuid} = require('uuidv4')

const cors = require('cors')

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))

let registro = []

app.get('/server', (req, res)=>{
        return res.json(registro)
                  .status(200)
})

app.post('/server', (req, res)=>{
    let id = uuid()

    let dados = {
        id,
        nome:req.body.nome,
        sexo:req.body.sexo,
        escolaridade: req.body.escolaridade
    }

    registro.push(dados)
    return res.json(dados)
              .status(201)
})

app.listen(port,()=>{
    console.log(`online in port: ${port}`)
})

