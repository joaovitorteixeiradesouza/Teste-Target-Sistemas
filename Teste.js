//João Vitor Teixeira de Souza
// Teste realizado com Node JS

//Questão 2
function fibonacci (numero) {
    console.log('Questão 2')
    var resultado = 0
    var k = 1
    var anterior = 0

    while (resultado < numero) {
        resultado = k + anterior
        anterior = k
        k = resultado

    }

    if (resultado == numero) {
        return "Pertence à sequência de Fibonacci!!"
    } else {
        return "Não pertence à sequência de Fibonacci"
    }
}

console.log(fibonacci(1597))

//Questão 3
function faturamento () {
    console.log('\nQuestão 3')
    var valores = [22174.1664, 24537.6698, 26139.6134, 26742.6612,
    42889.2258, 46251.174, 11191.4722, 3847.4823, 373.7838,
    2659.7563, 48924.2448, 18419.2614, 35240.1826, 43829.1667,
    18235.6852, 4355.0662, 13327.1025, 25681.8318, 1718.1221,
    13220.495, 8414.61]
    var maior = valores[0]
    var menor = valores[0]
    var soma = 0
    var media = 0  
    var maiores_media = 0

    for (i = 0; i < valores.length - 1; i++) {
        soma += valores[i]
    }
    media = soma / valores.length


    for (i = 0; i < valores.length; i++) {
        if (valores[i] > maior) {
            maior = valores[i]
        }
        if (valores[i] < menor) {
            menor = valores [i]
        }
        if (valores[i] > media) {
            maiores_media += 1
        }
    }
    console.log(`Menor valor: ${menor}`)
    console.log(`Maior valor: ${maior}`)
    console.log(`Quantidade de dias que ultrassaram a média: ${maiores_media}`)
}

faturamento()

//Questão 4
function faturamento_mensal () {
    console.log('\nQuestão 4')
    var valores = [67836.43, 36678.66, 29229.88, 27165.48, 19849.53]
    var estados =['SP', 'RJ', 'MG', 'ES', 'Outros']
    var total = 0
    var percentual = 0

    for( i = 0; i < valores.length; i++) {
        total += valores[i] 
    }

    for (i = 0; i < valores.length; i++) {
        percentual = (valores[i] * 100) / total
        console.log(`${estados[i]}   ----  ${percentual.toFixed(2)}%`)
    }
}

faturamento_mensal()

//Questão 5
function invertendo_string (string) {
    console.log('\nQuestão 5')
    invertida = ''

    for (i = string.length - 1; i >= 0; i--) {
        invertida += string[i]
    }

    return invertida
}

console.log(invertendo_string('São Paulo será campeão'))