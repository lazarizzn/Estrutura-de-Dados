const dados = require('./dados');

console.log("Exercicio 04");
console.log("------------------------");
console.log("Lista de todos os alunos");
console.log("------------------------");

const nota = [7, 9 ,6];

let medianotas = 0


for(let i = 0; i < 3; i++){
    console.log(nota[i])

    medianotas = medianotas + nota[i]
        
}
console.log("Media: ", medianotas / nota.length)