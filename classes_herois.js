// Instruções para entrega
// # 3️⃣ Escrevendo as classes de um Jogo

// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:

// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:

// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída

// Ao final deve se exibir uma mensagem:

// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada
 

const prompt = require ("prompt-sync")();

// Classe Herói
class Heroi {
    constructor (nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    
    atacar(){
        switch(this.tipo){
        case "monge": 
            console.log(`o ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando Artes marciais`)
            break;
        case "guerreiro":
            console.log(`o ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando Espada`)
            break;
        case "mago":
            console.log(`o ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando Magia`)
            break;
        case "ninja":
            console.log(`o ${this.tipo} ${this.nome} de ${this.idade} anos atacou usando Shuriken`)
            break;
        }
    }
}

// Criando Novo Herói
let nome_heroi = prompt ("Insira o nome do seu herói:");
let idade_heroi = prompt ("Insira a idade do herói:");
let tipo_heroi = prompt ("Insira o tipo de Herói (monge, guerreiro, mago, ninja):");

// Criação do objeto novoheroi
const novoheroi = new Heroi (nome_heroi, idade_heroi, tipo_heroi);

// Chamando o método atacar
novoheroi.atacar()