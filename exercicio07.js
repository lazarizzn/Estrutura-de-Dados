const dados = require('./dados');

console.log("Exercicio 06");
console.log("------------------------------");
console.log("Lista de todos os alunos");
console.log("------------------------------");

const aluno =  dados.pesquisarAlunoNotas("Lucas")

let Medianotas = 0;

if(aluno){
    console.log(aluno);
    
    for(let i = 0; i < aluno.notas.length; i++){
        Medianotas = Medianotas + aluno.notas[i];

    }

    console.log(Medianotas / aluno.notas.length)
}
else{
    console.log("Aluno não encontrado na lista")
}

