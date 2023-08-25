let carro = {
    marca: 'ford',
    ano: 1998
}
let marcaCarro = carro.marca
let {marca} = carro

console.log(marcaCarro)

// ----------------------------
 
let pessoa = { nome: "Creuza", idade: 35, faltas: 3}
let {nome, idade} = pessoa
console.log({nome, idade})