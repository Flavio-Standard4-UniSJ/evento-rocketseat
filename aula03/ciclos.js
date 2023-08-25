//for in --> percorre cada propriedade de um objeto
//for of  --> percorre cada item de um array

var pessoa = {
    nome: "Juvenal",
    idade: 75
}

for(let dados in pessoa){
    console.log(dados,pessoa[dados])
}

// -----------------------------------

var clubes = ["Arsenal", "Chelsea", "Real Madrid"]
for(let times of clubes){
    console.log(times)
}