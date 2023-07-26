

let numeroUm = 15
let numeroDois = 36

console.log(numeroUm+numeroDois);

         //nome
              //parametros
function soma(numero1 = 0, numero2 = 0){
    const resultado = numero1 + numero2;
    //console.log(resultado)
    return resultado
    //retorno
}

//(a²+b²)
function somaQuadrados(valorA, valorB){
    return valorA**2 + valorB**2
    
} 

console.log(soma(1,3))
console.log(soma(numeroUm, numeroDois))
console.log(soma(numeroDois))
console.log(soma(numeroDois,2))
console.log(soma(soma(1,3), soma(5,9)))

console.log(somaQuadrados(numeroUm, numeroDois))