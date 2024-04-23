const dados = require('./dados');

console.log("Exercicio 04");
console.log("------------------------");
console.log("Lista de todos os alunos");
console.log("------------------------");

for(let i = 0; i < dados.alunoNotas.length; i++){
    console.log(dados.alunoNotas[i].nome+ 
        ' - '+dados.alunoNotas[i].idade+' - '+dados.alunoNotas[i].notas);

        


}