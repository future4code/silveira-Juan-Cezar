// Exercício de interpretação
//  1 =   a- 10 e 50.
//        b- Não apareceria nada,
//        pois o console log que da
//        impressão.
//___________________________________________
//  2 =   a- Iria incluir a palavra
//        cenoura substituindo a selecionada
//        eo texto todo ficaria em minúsculo.
//        b- Eu gosto de cenoura

//-------------------------------------------

// Exercícios de escrita de código
// 1=     a-Troque o nome, idade, cidade e se é estudante ou não por informações sobre você.
//        Lembrando que a função não possui entradas, apenas imprime essa mensagem.
//           """Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."""

// let name = prompt("Qual o seu nome?")
// let age = prompt("Qual a sua idade?")
// let city = prompt("Qual sua cidade?") 
// let formation = prompt("Você é estudante?")

function escrever(){
    let nome = "Juan"
    let idade = 29
    let cidade = "Rio De Janeiro"
    let estudante = "estudante"

    let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${estudante}`

    console.log(frase)
}

escrever()

function soma(valor1, valor2){
    let calculaSoma = valor1 + valor2
    return calculaSoma
}
let valor1 = 10
let valor2 = 12
console.log(soma(valor1, valor2))