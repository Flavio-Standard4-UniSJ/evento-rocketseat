let idades = [12, 4, 32, 12, 13, 25]
let maiores = idades.filter(function(idade){
    return idade > 18
})
console.log(maiores)