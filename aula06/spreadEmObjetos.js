let carro = { marca: "ferrari", km:0, ano:2017}
let pilotoUm = { nome: "Vettel", idade: 37, ...carro}
let pilotoDois = { nome: "Leclerc", idade: 26, ...carro}
console.log(pilotoDois)
