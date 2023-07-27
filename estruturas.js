function lancar_dados(){
    let numero = 1 +((Math.round(Math.random()*100)% 6))
    return numero
}
let dados = lancar_dados()
function verifica_vencedor(dados){
if(dados === 6){
    console.log(` Deu ${dados}, Parabéns você Ganhou !!`)
} else {
    console.log(`Deu ${dados}, Você Não esta perdendo, esta sem sorte mesmo !!`)
}
}
//estruturas de repetição

let contador = 0
while(dados !== 6){
    dados = lancar_dados()
    contador++
}
verifica_vencedor(dados)
console.log(contador)

//do-while
contador = 0
do{
    console.log(`diferença`)
    dados = lancar_dados()
    contador ++
} while(dados !== 6)

verifica_vencedor(dados)
console.log(contador)

let nome = ''
let senha = ''
do{
    console.log('Qual o seu Nome ?')

}while (nome !== '')

//for
    //inicio
           //teste
                //incremento

for(x = 0;x <= 10;x++){
    console.log(x)

}for(x = 0;x <= 10;x++)
    console.log(x)
