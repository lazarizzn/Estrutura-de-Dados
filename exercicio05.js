const dados = require('./dados');

console.log("Exercicio 04");
console.log("------------------------------");
console.log("Lista de todos os alunos");
console.log("------------------------------");


for(const aluno of dados.alunoNotas){

    console.log("--------------------------");
    console.log(aluno.nome+" - "+aluno.notas);


let Medianotas = 0;

for(let i = 0; i < aluno.notas.length; i++){
    Medianotas = Medianotas + aluno.notas[i];
} 
if(Medianotas / aluno.notas.length >=8){
    console.log("O aluno atingio a Media:", Medianotas / aluno.notas.length)
}
else{
    console.log("Não atingio a media")
}




}
