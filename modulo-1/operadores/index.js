let minhaIdade = Number(prompt("Qual a minha idade?"))
let amigoIdade = Number(prompt("Qual a idade de seu amigo?"))
let resultado = minhaIdade > amigoIdade

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado)
const diferencaDeIdade = amigoIdade - minhaIdade
console.log("diferença de idade é ..", diferencaDeIdade);

//enunciado 2.

const numeroPar = (prompt("insira um numero par"));
const restoDivisao = numeroPar % 2;
console.log(restoDivisao);

const numeroPar1 = (prompt("insira um numero diferente2"))
const restoDivisao1 = numeroPar1 % 2;
console.log(restoDivisao1);
//Houve um padrão, porque qualquer numero par divido por numero par não existe sobras.

const numeroPar2 = (prompt("insira um numero diferente3"));
const restoDivisao2 = numeroPar2 % 2;
console.log(restoDivisao2); 

//sempre que a divisão for por numero impar, havera sobras;

//enunciado 3.

const idadeEmAnos = (prompt("Quantos anos você tem?"));
const idadeEmMeses = idadeEmAnos * 12;
console.log(idadeEmMeses);

const idadeEmDias = idadeEmAnos * 365;
console.log(idadeEmDias);   

const idadeEmHoras = idadeEmAnos * 365 * 24;
console.log(idadeEmHoras);

//enunciado 4

const pergunteAqui = (prompt("insira aqui um numero"));
const pergunteAqui2 = (prompt("insira aqui um numero2"));
console.log("o primeiro numero e maior que o segundo?", pergunteAqui > pergunteAqui2);
//O resultado deu false, mesmo sendo > para o lado certo.

console.log("O primeiro numero é igual ao segundo?", pergunteAqui === pergunteAqui2);
console.log("O primeiro numero é divisível pelo segundo?", (pergunteAqui / pergunteAqui2) !==0);
console.log("O segundo numero é divisível pelo primeiro?", (pergunteAqui2 / pergunteAqui) !==0);