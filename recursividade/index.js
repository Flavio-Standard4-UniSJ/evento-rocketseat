const prompt = require('prompt-sync')();

console.log('informe um número para saber seu fatorial');
var num = prompt("informe um valor: ");

function fatorial(num){
    let res;
    if(num<1 || num > 100){
        console.log("o número deve estar entre 0 e 100")
        res=1;
    }else{
        res = num * fatorial(num-1);
    }
    return res;
}
console.log(fatorial(num));