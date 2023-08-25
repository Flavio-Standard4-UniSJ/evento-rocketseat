function adicionarHttp(url) {
    return "http://"+url
}

function processar(listaDeSites,adicionarHttp){
    listaFinal = []
    for(let i = 0; i < listaDeSites.length; i++){
        listaFinal.push(adicionarHttp(listaDeSites[i]))
    }
    return listaFinal
}
//console.log(processar(["www.google.com","www.yahoo.com"], adicionarHttp))