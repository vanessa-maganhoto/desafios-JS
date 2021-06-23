function calcpreco(){
    let p1 = Number(document.querySelector('input#preco1').value)
    console.log (p1)
    let p2 = Number (document.querySelector('input#preco2').value)
    console.log (p2)
    if (!p1 || !p2){
        window.alert ('[ERRO] Insira os valores para prosseguir')

    } else if (p1 < p2){
        let precof = 0
        precof = p2 - p1
        let aumento = (p2 * 100) / p1
        let aumentofinal = aumento - 100
        resp.innerHTML = `<strong>Analisando os valores informados</strong> <br>\n O produto custava R$${p1} e agora custa R$${p2}.<br>\n Hoje o produto está mais caro. <br>\n O preço subiu R$${precof} em relação ao preço anterior. <br>\n Uma variação de ${aumentofinal}% pra cima.`
    } else {
        (p1 > p2)
        precof = p1 - p2
        let dim = (p2 * 100) / p1
        resp.innerHTML = `<strong>Analisando os valores informados</strong> <br>\n O produto custava R$${p1} e agora custa R$${p2}.<br>\n Hoje o produto está mais barato. <br>\n O preço caiu R$${precof} em relação ao preço anterior. <br>\n Uma variação de ${dim}% pra baixo.`
    }
}

