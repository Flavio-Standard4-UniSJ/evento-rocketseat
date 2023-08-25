let data = new Date()
let dia_de_hoje = data.getDate()
console.log(dia_de_hoje)

let mes_atual = data.getMonth()
console.log(mes_atual)//retorna um array de 11 indices -- 0 a 11
mes_atual++
console.log(mes_atual)

let dia_da_semana = data.getDay()
console.log(dia_da_semana)//retorna um array de 6 indices -- 0 a 6
let semana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta","Sábado"]

console.log(semana[dia_da_semana]) //mostrar por escrito o dia


let ano = data.getFullYear()
console.log(ano)


// --------------------------------------

//datas dinamicas
//o mês deve subtrair 1 -- deve ir ate 11 -- 0 é janeiro e 11 é dezembro

let meuAniversarioErrado = new Date(1977,8,12) //setembro
console.log(meuAniversarioErrado)
let meuAniversarioCorreto = new Date(1977,7,12) //agosto
console.log(meuAniversarioCorreto)
