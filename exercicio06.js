const dados = require('./dados');

console.log("Exercicio 06");
console.log("------------------------------");
console.log("Lista de todos os alunos");
console.log("------------------------------");

const aluno =  dados.pesquisarAlunoNotas("Miguel")
if(aluno){
    console.log(aluno);
}
else{
    console.log("Aluno não encontrado na lista")
}
