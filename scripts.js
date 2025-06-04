// Mostrar mensagem
console.log("Hello World!");
/**
 * Comentarios mais longos
 */
/**
 * Variaveis
 */
let nome = "Juliano"; //texto
// Private String nome = "Juliano";
let sobrenome = "Vieira"; //texto
let idade = 43; //tipo inteiro
let possuiCNH = true; //tipo boolean
let jogaFreeFire = false; //tipo boolean
let altura = 1.83; //tipo number, decimal ou float
let indefinido = undefined; //tipo indefinido
let none = null; //tipo nulo

console.log(nome, sobrenome, idade, possuiCNH);

nome = "Juliano 'Metra'";
console.log(nome);
/**
 * Constantes
 */
const PI = 3.14;
console.log(PI);
/**
 * Operacoes basicas de matematica
 */
let a = 10;
let b = 20;
let soma = a + b;
let subtracao = b - a;
let dividir = b / a;
let multiplicar = a * b;
let potencia = a ** 2;
let resto = b % a;
console.log(soma, subtracao, dividir);
console.log(multiplicar, potencia, resto);
/**
 * Manipulacao de Texto
 */
let concatenar = "Ola " + nome + ", seja...!";
console.log(concatenar);
let ideal = `Ola, ${nome}, seja...crase`;
console.log(ideal);
console.log(nome.length); //Tamanho
console.log(nome.toUpperCase()); //Maiuscula
console.log(nome.toLowerCase()); //Minusculo
//Pesquisar se possui partes de
console.log(nome.includes("Juliano"));
//Localizar indice
console.log(nome.indexOf("M")); //Primeiro
console.log(nome.lastIndexOf("a")); //Ultimo
//Substituir
console.log(nome.replace("Metra", "Metraton"));
//Extrair parte do texto
console.log(nome.slice(3, 7));
//Remover espaços varios do inicio e fim
console.log(" Agua de beber ".trim());
/**
 * Operadores Logicos
 */
//Tipo da variavel
console.log(typeof nome);
console.log(typeof altura);
//igual
console.log(2 == "2");
//igual e do mesmo tipo
console.log(2 === "2");
// maior
console.log(2 > "2");
// maior ou igual
console.log(4 >= 3);
// menor
console.log(5.9 < 6);
//menor ou igual
console.log(6 <= 6);
// diferente
console.log(6 != 6)
console.log(6 !== 6)
/**
 * Funções
 */
function statusNota(nota){
    // controle de fluxo
    let msg = "Não Informado"
    if(nota >= 6){
        msg = "Aprovado"        
    }
    else if(nota >= 5){
        msg = "Recuperação"
    }else{
        msg = "Reprovado"
    }
    return msg
}

let situacao = statusNota(5.6)
console.log(situacao)

let nota = 5.6
let presenca = 90
if(nota >= 6 & presenca >= 75){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}

let finalDoCurso = true
let liberouMaisCedo = false

if(finalDoCurso | liberouMaisCedo){
    console.log('Hora de ir pra Casa')
}else{
    console.log('Continua o baile')
}

let teste = (nota >= 6 & presenca >= 75) 
& (finalDoCurso | liberouMaisCedo)
console.log(teste)
//0 = false e 1 = True
/**
 * Coleções de dados
 */
let frutas = ['Maça','Tomate','Morango']
console.log(frutas)
// Chamar pelo indice 0,1,2....
console.log(frutas[1])
//Adcionar nova fruta
frutas.push("Abacate")
console.log(frutas)
// Remover o ultimo
frutas.pop()
// Remover o primeiro
frutas.shift()
// Colocar no Inicio da Fila
frutas.unshift('Pera')
console.log(frutas)
/**
 * Iteração
 */
//Para: percorre uma lista conhecida
for( let f of frutas){
    console.log(f)
}
for(f in frutas){
    console.log(f)
}
// enquanto nao tiver fim
let contador = 0
let regressiva = 10
while(contador <= 10){
    console.log(contador, regressiva)
    // incrementar
    contador++
    //decrementar
    regressiva--;
}
/**
 * Dicionarios
 */

let pessoa = {
    "nome" : "Juliano",
    "idade" : 43,
    "cidadeUF" : "Castro/PR",
    "profissao" : "Instrutor"
}

console.log(pessoa)
console.log(pessoa['nome'])
console.log(pessoa.nome)
//Mudar item
pessoa['nome'] = "Juiano Vieira"
pessoa.cidadeUF = "Castro-PR"
console.log(pessoa)
pessoa['linguagem'] ="JS"
pessoa.framework = 'React.js'
console.log(pessoa)
//deletar
delete pessoa.framework
console.log(pessoa)
//desestruturador (destrutor)

const {linguagem, cidadeUF} = pessoa
console.log(linguagem,cidadeUF)