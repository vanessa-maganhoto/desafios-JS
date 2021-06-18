function reajuste (){
    let nome = document.querySelector('#txtn').value 
    let salario =  Number (document.querySelector('#vsal').value)
    let porcentagem = Number (document.querySelector('#vpor').value)

    if (!nome && !salario && !porcentagem) {
        window.alert (`Você precisa preencher todos os campos!`)
    } else {
        let porc = Number ((porcentagem/100) * salario)
        let tot = (salario + porc)
        res.innerHTML = (`<strong> ${nome} recebeu um aumento salarial</strong>! <br>\n O salário atual é R$ ${salario}. Com o aumento de ${porcentagem} %, a partir do próximo mês receberá R$ ${porc} a mais. <br>\n No mês que vem, ${nome} ganhará R$ ${tot}`)
        
    }
    
}