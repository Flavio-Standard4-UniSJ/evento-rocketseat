let numeros = [5, 7, 8]
let soma = numeros.reduce(function(pilha, numero){
    return pilha + numero
})
console.log(soma)