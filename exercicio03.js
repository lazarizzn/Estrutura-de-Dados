const dados = require('./dados');

console.log("Exercicio 03");
console.log("------------------------");
console.log("Lista de todos os alunos");
console.log("------------------------");

let SomaNotas = 0;

for(let i = 0; i < dados.alunoNotas.length; i++){
    console.log(dados.alunoNotas[i].nome+ 
        ' - '+dados.alunoNotas[i].idade+' - '+dados.alunoNotas[i].notas);

    SomaNotas = SomaNotas + dados.alunoNotas[i].idade;


}

console.log("------------------------");
console.log("Media idades: ", SomaNotas / dados.alunoNotas.length)
console.log("------------------------");