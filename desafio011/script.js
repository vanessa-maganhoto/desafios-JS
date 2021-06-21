function calcAno (){
    let ano = Number (document.querySelector('input#qt').value)
    console.log (ano)
    if (!ano){
        window.alert ('Por favor, digite um ano!')
    } else if (ano % 4==0 && ano % 100 != 0 || ano % 400==0) {
        res.innerHTML = `O ano ${ano} é bissexto`
        
    } else{
        (ano % 4 !=0 && ano %400 !=0)
        res.innerHTML = `O ano ${ano} não é bissexto`
        
    }
}