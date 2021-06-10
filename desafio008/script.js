function desconto(){
    let produto = document.querySelector ("#txtp").value //document.getElementById('txtp')
    console.log (produto)
    let desconto = Number (document.getElementById ('vdesc').value)
    let valor = Number (document.getElementById('vprod').value)
    

    if (!produto && !desconto && !desc) {
        window.alert (`Você não preencheu todos os campos necessários!`)
    } else {
        let tot = Number((desconto/100) * valor)
        let final = Number (valor - tot)
        res.innerHTML = (`O preço original de ${produto} era ${valor} e com ${desconto}% de desconto você pagará R$${final}`)
    }
}