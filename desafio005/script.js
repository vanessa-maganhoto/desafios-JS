function calcular(){
    let distancia = Number (window.prompt (`Digite uma distância em metros (m)`))
    let km = Number(distancia / 1000)
    let hm = Number (distancia / 100)
    let dam = Number (distancia / 10)
    let dm = Number(distancia * 10)
    let cm = Number (distancia * 100)
    let mm = Number (distancia *1000)

    resposta.innerHTML = (`A distância de ${distancia} metros, corresponde a <br>\n ${km} quilômetros (Km) <br>\n ${hm} hectômetros (Hm) <br>\n ${dam} decâmetros (Dam) <br>\n ${dm} decímetros (dm) <br>\n ${cm} centímetros (cm) <br>\n ${mm} milímetros (mm)`)
}