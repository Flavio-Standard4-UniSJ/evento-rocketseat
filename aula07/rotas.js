const express = require("express")
const app=express()

app.get('/',(request, response)=>{
    response.send("Viva Jesus!!!")
})

app.listen(3000,()=>{
    console.log("servidor executando")
})