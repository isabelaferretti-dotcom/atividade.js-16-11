//Arrow function

function saudacao(nome) {
    return "Olá," + nome;
}

const saudacao1 = (nome) => "Olá," + nome;

console.log(saudacao1("Murilo"))

2
const soma = (a, b) => a + b;

console.log(soma(2, 3));

3
const comDesconto = preco => preco * 0.9;
console.log(comDesconto(100));

4
let idade = 16
const situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(situacao);


5
const statusNota = (nota) => (nota >= 7 ? "Aprovado": "Reprovado");

console.log(statusNota(8));
console.log(statusNota(4));

6
const textoBotao = logado => logado ? "Sair": "Entrar";
console.log(textoBotao(true));
console.log(textoBotao(false));