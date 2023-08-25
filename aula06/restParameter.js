function somar(...numeros){
    return numeros.reduce((acum, num)=>acum += num);
}
console.log(somar(5,9,11,4))
console.log(somar(5,3,19,40,4,7,23))

/*
console.log('======== sintaxe error  ==========')

function somar(...numeros, outroParametro){
    return numeros.reduce((acum, num)=>acum += num);
}

*/