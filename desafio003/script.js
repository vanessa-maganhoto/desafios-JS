
function ad(){
    let i = Number(prompt (`Digite um número inteiro`))
    console.log (!i)    
    if (!i) {
            window.alert('Você digitou uma letra. Por favor, digite um número.')
        } else {
            resposta.innerHTML = (`Você digitou o número ${i}.<br>O antecessor é ${i-1} e o sucessor é ${i+1}. `)
        }
        
}