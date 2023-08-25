const express = require('express');
const app = express();

// Escreva seu código aqui
var produto = {
    tipoProduto: null,
    preco: null,
    preco: null,
    quantidade: null
}
app.get( "/produto/adicionar", (req, res) => {
    res.send(produto)
})
app.listen(3000,()=>{
    console.log("servidor rodando")
})
