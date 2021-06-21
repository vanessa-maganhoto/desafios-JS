function calcular (){
    let a = Number (document.getElementById ('va').value)
    let b = Number (document.querySelector('input#vb').value)
    let c = Number (document.querySelector('input#vc').value)
    console.log (a)
    console.log (b)
    console.log (c)
    if (!a && !b && !c) {
        window.alert (`Você precisa preencher todos os campos!`)
    } else {
        let calc = Number ((b**2) - 4*a*c) 
        console.log (calc)
        res.innerHTML = `Cálculo realizado: &Delta; =${b}&sup2; - 4.${a}.${c} <br>\n O valor de &Delta; é ${calc}`
    }
        
    
}