
//array
       // índice
          //0 1 2 3 4 5
let dado = [1,2,3,4,5,6]


function lancar_dados(){
    let numero = 1 +((Math.round(Math.random()*100)% 6))
    console.log(numero)
}
console.log(dado[0])

let nome = 'Laíse'
console.log(nome[3])


let somaVetor = 0
for(coluna = 0; coluna < 6; coluna++){
    somaVetor = somaVetor + dado[coluna]
}
console.log(somaVetor)

//matriz
 
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
 
let matriz1 = [[1,2,3],[4,5,6],[7,8,9]]
let sona = matriz [0][0]+ matriz [1][1]+ matriz [2][2]
console.log(matriz[0][2])
let matriz3 = [
     [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ],
[
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i']
],
[
    [0,1,0],
    [1,0,1],
    [0,1,0]
]
]