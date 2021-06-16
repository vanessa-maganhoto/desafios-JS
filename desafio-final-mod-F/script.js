let array = []
function adicionar (){
    let num = document.querySelector ('#txtn')
    let analisador = document.querySelector ('#box')
    let ad = Number (num.value)
    if (!ad) {
        window.alert (`[ERRO] Digite um valor.`)
    } else if  (array.indexOf(ad) >=0){
        window.alert (`[ERRO] Número já adicionado!`)
    } else if (ad >100 || ad <0) {
        window.alert (`[ERRO] Adicione um número entre 1 e 100.`)
    } else {
        analisador.innerHTML += (`O valor ${ad} foi adicionado <br>\n`) 
        array.push (ad)
        console.log (ad)
    }
}

function finalizar () {
    let ordem = array.sort ()
    res.innerHTML = `Os números digitados em ordem crescente são ${ordem} <br>\n`
    let soma = 0
    for ( let pos =0; pos < array.length; pos ++) {
        
        soma += (array[pos])
        console.log (soma)
    }
    res.innerHTML += `A soma dos números digitados é ${soma} <br>\n`
    let media = soma /  array.length
    res.innerHTML += `A soma dos números digitados é ${media. toFixed(2)} <br>\n`
    res.innerHTML += `Ao todo temos ${array.length} cadastrados <br>\n`

    let menor = (array[0])
    for ( let pos =0; pos < array.length; pos ++) {
        if (array[pos] < menor){
            menor = (array[pos])
        }
    }
    res.innerHTML += `O menor número digitado é ${menor} <br>\n`
    
    let maior = array [0]
    for ( let pos =0; pos < array.length; pos ++) {
        if (array[pos] > maior){
            maior = array[pos]
        }
    }
    res.innerHTML += `O maior número digitado é ${maior} <br>\n`
}
