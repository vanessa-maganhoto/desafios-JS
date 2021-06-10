function temperatura () {
    let grauc = Number (window.prompt (`Digite uma temperatura em °C (Celsius)`))
    if (!grauc){
        window.alert (`Você não digitou nenhum número.`)
    } else {
        let grauk = Number (grauc + 273)
        let grauf = Number ((grauc * 1.8) + 32)
        resposta.innerHTML = (`A temperatura de ${grauc}°C, corresponde a... <br>\n ${grauk}°K (Kelvin) <br>\n ${grauf}°F (Fahrenheit)`)
    }
}