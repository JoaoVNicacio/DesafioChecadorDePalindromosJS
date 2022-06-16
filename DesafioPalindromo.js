function palindromeChecker(word){
    // criando os arrays para a analise:
    let palindrome= word.split("").reverse().join("")

    // retorno da função:
    return (palindrome === word) ? `${word} é um palíndromo` : `${word} não é um palíndromo`
}

// declaração e obtenção de valores:
let wordInput = prompt("Digite uma palavra e iremos checar se é um palíndromo.")

// chamando e exibindo a função:
console.log(palindromeChecker(wordInput))
// chamando com alert para exibir de forma visível ao usuário que não estiver no console:
alert(palindromeChecker(wordInput))


