const dados = require('./dados');

console.log("Exercicio 08");
console.log("------------------------------");
console.log("media dee alunos de idade 20");
console.log("------------------------------");

let alunos20 = [];

for(const aluno of dados.alunoNotas){
    if (aluno.idade == 20){
        alunos20.push(aluno);
    }


}

somamgeral = 0;

for(const aluno of alunos20){
    let someMedia = 0;
    for(let i = 0; i < aluno.notas.length; i++){
        someMedia = someMedia + aluno.notas[i];

    }
    somamgeral = somamgeral + (someMedia/ aluno.notas.length)

    console.log(aluno, "media: ", someMedia/ aluno.notas.length)
    console.log("----------------------------------------------------------------")
}


console.log("Media geral: ", somamgeral/alunos20.length)
console.log("----------------------------------------------------------------")


