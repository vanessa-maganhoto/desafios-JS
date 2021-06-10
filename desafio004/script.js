
function troco (){
    let produto = window.prompt ('Que produto você está comprando?')
    if (!produto) {
        window.alert('Você não digitou o nome do produto.')
    } else {
    let vproduto = Number(window.prompt (`Quanto custa ${produto} que você está comprando?`))
    let entrada = Number (window.prompt (`Qual foi o valor que você deu para para pagar ${produto}?`) )
    let vtroco = Number (entrada - vproduto)
        if (entrada < vproduto){
            window.alert (`Você não tem o valor suficiente para comprar ${produto}`)
        } 
        else if (entrada == vproduto) {
            window.alert (`Você não receberá troco pois o valor pago é igual ao valor do produto  `)
        } else {
        window.alert (`Você comprou ${produto} que custa R$ ${vproduto}.Deu R$ ${entrada} em dinheiro e vai receber R$ ${vtroco}.Volte sempre!`)
    }
    
    }
    }
    