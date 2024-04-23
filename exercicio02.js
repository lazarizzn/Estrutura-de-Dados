const dados = require('./dados')

console.log("Exercicio 02");
console.log("------------------------");
console.log("Lista de todos os alunos");
console.log("------------------------");

for(const aluno of dados.alunos){
    console.log(aluno.nome+" - "+aluno.nota)
}

console.log("Exercicio 02");
console.log("------------------------");
console.log("Lista de alunos nota >= 7");
console.log("------------------------");

for(const aluno of dados.alunos){

    if(aluno.nota >= 7){
        console.log(aluno.nome+" - "+aluno.nota)
    }
}