//Marília Edite
//2A

const express = require('express');
const app = express();

let objetos = [];

app.get('/publicacao/', (req, res) => {
    res.json(objetos);
})


app.post('/publicacao/:texto', (req, res) => {
    let objetoTeste = {
        texto: req.params.texto,
    }
    res.json(objetoTeste);
    objetos.push(objetoTeste)
});

app.delete('/publicacao/', (req, res) => {
    objetos.pop()
    res.send("Deletado")
})

app.listen(3000, () => {
    console.log('Server started');
});
