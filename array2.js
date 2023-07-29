let nome = ['Alessandra', 'Laíse', 'João']
let telefone = [999999999, 888888888, 777777777]
let alunos_agenda = [nome, telefone]


function pegar_telefone(nome){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]

    if(aluno.includes(nome)){
        let indice = aluno.indexOf(nome)
        console.log(telefone[indice])
    }
    else{
        console.log('aluno não cadastrado')
    }
}
console.log(
    `Existem ${alunos_agenda[0].length} alunos na lista`
)
alunos_agenda[0].push('Moises')
alunos_agenda[1].push(989898999)
console.log(nome)
console.log(telefone)
console.log(alunos_agenda)
pegar_telefone('Moises')
pegar_telefone('Laise')
console.log(
    `Existem ${alunos_agenda[0].length} alunos na lista`
)

function exibir_agenda(){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]

    let tamanho = aluno.length

    for(posição=0;posição<tamanho;posição++){
        console.log(
            `${aluno[posição]}: ${telefone[posição]}`
        )
    }
}

function cadastra_agenda(){
    let aluno = alunos_agenda[0]
    let telefone = alunos_agenda[1]

    const prompt = require("prompt-sync")();

    let input = prompt("Qual o nome do Aluno?");
    aluno.push(input)

    if(aluno.includes(input)){
        input = prompt("Qual o telefone do aluno")
        telefone.push(input)
        
    }
    else{
        console.log('Erro ao cadastrar')
    }
}

cadastra_agenda()
pegar_telefone('Moises')
pegar_telefone('Laise')
exibir_agenda()

