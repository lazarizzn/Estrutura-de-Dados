const dados = require('./dados');

console.log("Exercicio 04");
console.log("------------------------");
console.log("Lista de todos os alunos");
console.log("------------------------");


for(const aluno of dados.alunoNotas){
    console.log(aluno.nome+" - "+aluno.notas);


let Medianotas = 0;

for(let i = 0; i < aluno.notas.length; i++){
    Medianotas = Medianotas + aluno.notas[i];
} 
console.log("Media: ", Medianotas / dados.notas.length)

}
