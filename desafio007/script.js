
let cot = Number (window.prompt (`Antes de mais nada. Quanto está a cotação do dólar agora?`)) 
if (!cot) {
    window.alert (`Você não digitou um número.`)
}

function conversao (){
    let real = Number (window.prompt (`Quantos R$ você tem na carteira?`))
    let res = Number(real / cot)
    
        if (!real){
            window.alert (`Você não digitou um número.`)
        } else {
            resposta.innerHTML = (`Hoje a cotação do dólar é US$ ${cot}. <br>\n Você tem R$ ${real} e comprará US$ ${res.toFixed(2)} dólares. `)
        }
}