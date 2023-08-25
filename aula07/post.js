const express = require('express');
const app = express();

let produto = {
  tipoProduto: "living",
  preco: 1245,
  quantidade: 300
}
app.post("/produto/criar", (req, res) => {
    res.send(produto)
})

app.listen(8000, ()=>{
    console.log('servidor rodando na porta 8000')
})
