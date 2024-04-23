const dados = require('./dados');



console.log("---------------------------------")
console.log("Exercicio01")
console.log("---------------------------------")

console.log("quantidade: ", dados.alunos.length);
console.log("---------------------------------")


let SomaNotas = 0;
let maiornota = 0;
let menornota = 99;


for(let i = 0; i < dados.alunos.length; i++){
    console.log(dados.alunos[i].nome+ 
        ' - '+dados.alunos[i].nota);

    SomaNotas = SomaNotas + dados.alunos[i].nota;

    if(dados.alunos[i].nota > maiornota)
        maiornota = dados.alunos[i].nota;

    if(dados.alunos[i].nota < maiornota)
        menornota = dados.alunos[i].nota;
}




console.log("---------------------------------")
console.log("Soma das notas: ", SomaNotas)
console.log("media das notas: ", SomaNotas / dados.alunos.length);
console.log("maior nota: ", maiornota)
console.log("menor nota: ", menornota)
console.log("---------------------------------")