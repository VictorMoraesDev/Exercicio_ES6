const alunos = [
    {nome: "João", nota: 4.5},
    {nome: "Maria", nota: 9.0},
    {nome: "Pedro", nota: 5.5},
    {nome: "Joaquina", nota: 8.0}
];

console.log(alunos);

function alunosAprovados(arrayDeAlunos) {
    return arrayDeAlunos.filter(aluno => aluno.nota >= 6);
}
const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);