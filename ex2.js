//Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.
let arr = [6, 3, 12, 1, 22]
let maior = arr[0], indiceMaior = 0
let menor = arr[0], indiceMenor = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maior) {
        maior = arr[i]
        indiceMaior = i
    }
    if (arr[i] < menor) {
        menor = arr[i]
        indiceMenor = i
    }
}
console.log(`O maior numero é o ${maior} e o seu indice é ${indiceMaior} e o menor numero é ${menor} e o seu indice é ${indiceMenor}`);
