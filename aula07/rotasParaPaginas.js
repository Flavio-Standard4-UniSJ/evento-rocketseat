const express = require('express');
const app = express();

// digite localhost:3000/home  ---> navegador
app.get('/home', (req, res) => {
    res.send("Olá, estamos na página home")
})
app.listen(3000,()=>{
    console.log("servidor executando")
})