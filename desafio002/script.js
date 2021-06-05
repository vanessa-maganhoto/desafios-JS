
function desafio () {
    let nome = prompt ('Qual o seu nome?')
    let idade = prompt ('Qual a sua idade?')
    console.log (`[${nome == ""}]`)

        if (nome == '' || idade == '') {
            window.alert ('Você precisa preencher todos os dados para prosseguir')
        }
    window.alert (`Acabei de conhecer ${nome} que tem ${idade} anos`)

}