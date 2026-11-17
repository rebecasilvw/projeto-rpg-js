const nomeTreinador = prompt("Qual é o seu nome, treinador?")
// Classe -- Criar o modelo dos Pokemons
class Pokemon{
    constructor(nome, tipo){
        this.nome = nome
        this.tipo = tipo
        this.ataque = 1
        this.defesa = 1
        this.resistencia = 1
    }

    treinar(opcao){

        if(opcao === "1"){
            this.ataque++
            return `${this.nome} treinou ataque! Novo nível: ${this.ataque}`

        }else if(opcao === "2"){
            this.defesa++
            return `${this.nome} treinou defesa! Novo nível: ${this.defesa}`

        }else if(opcao === "3"){
            this.resistencia++
            return `${this.nome} treinou resistência! Novo nível: ${this.resistencia}`

        }else{
            return "Escolha um treinamento válido."
        }

    }
}

const escolhaInicial = prompt(
    `
    PROFESSOR CARVALHO:

    Olá! Seja bem-vindo ao mundo dos Pokémon!

    Meu nome é Carvalho, sou um pesquisador Pokémon.
    Há muitos mistérios sobre essas criaturas incríveis,
    e minha vida é dedicada a estudá-las.

    Nesta região, existem diversos Pokémons,
    cada um com suas próprias habilidades e características.

    Hoje é um dia muito especial!
    Você está prestes a iniciar sua jornada como treinador.

    Escolha seu primeiro companheiro Pokémon
    e prepare-se para viver grandes aventuras!

    Escolha seu Pokémon inicial:

    1 - Bulbasaur 🌿
    2 - Charmander 🔥
    3 - Squirtle 💧
    `
)

let pokemon

if(escolhaInicial === "1"){
    pokemon = new Pokemon("Bulbasaur 🌿", "Planta/Veneno")
}else if(escolhaInicial === "2"){
    pokemon = new Pokemon("Charmander 🔥", "Fogo")
}else if(escolhaInicial === "3"){
    pokemon = new Pokemon("Squirtle 💧", "Água")
}else{
    pokemon = new Pokemon("Pikachu ⚡", "Elétrico")
    alert("Escolha inválida! Você recebeu Pikachu como Pokémon inicial.")
}

const treinador = {
    nome: nomeTreinador
}

// Opcao de escolher o pikachu--

alert(
    `
    ${treinador.nome}, sua jornada está começando!

    Mas espere... algo inesperado aconteceu!
    `
)

const encontroPikachu = prompt(
    `
    ⚡ UM ENCONTRO SURPRESA!

    Um Pikachu⚡selvagem apareceu!

    Ele parece interessado em acompanhar você.

    1 - Trocar meu Pokémon por Pikachu ⚡
    2 - Continuar com meu Pokémon atual
    3 - Recusar o encontro
    `
)

if(encontroPikachu === "1"){

    pokemon = new Pokemon("Pikachu", "Elétrico")

    alert(
        `
        Você agora tem um Pikachu! ⚡

        Seu novo companheiro começa
        com seus próprios atributos.
        `
    )

}else if(encontroPikachu === "2"){

    alert(`${pokemon.nome} continuará sendo seu parceiro!`)

}else if(encontroPikachu === "3"){

    alert("Você decidiu seguir sua jornada sem Pikachu.")

}else{

    alert("Escolha inválida. Você continuará com seu Pokémon atual.")

}

// Array de fases do jogo-- To precisando anotar pra n me perder na lógica 

const fases = [
    {
        numero: 1,
        nivel: 1,
        inimigo: "Rattata",
        integrante: "Recruta da Equipe Rocket",
        local: "Floresta de Viridian",
        ataque: 1,
        defesa: 1,
        resistencia: 1
    },
    {
        numero: 2,
        nivel: 2,
        inimigo: "Ekans",
        integrante: "Jessie",
        local: "Cidade de Pewter",
        ataque: 2,
        defesa: 1,
        resistencia: 1
    },
    {
        numero: 3,
        nivel: 3,
        inimigo: "Koffing",
        integrante: "James",
        local: "Monte Lua",
        ataque: 2,
        defesa: 2,
        resistencia: 2
    },
    {
        numero: 4,
        nivel: 4,
        inimigo: "Meowth",
        integrante: "Equipe Rocket",
        local: "Cidade de Celadon",
        ataque: 3,
        defesa: 2,
        resistencia: 3
    },
    {
        numero: 5,
        nivel: 5,
        inimigo: "Arbok",
        integrante: "Jessie e James",
        local: "Quartel da Equipe Rocket",
        ataque: 4,
        defesa: 3,
        resistencia: 4
    }
]

// Funções-- Coloquei: Complementares, anônimas, rotina e retorno.
// Complementar - Rotina
function mostrarStatus(){

    const niveis = [
        pokemon.ataque,
        pokemon.defesa,
        pokemon.resistencia
    ]

    const poderTotal = niveis.reduce(
        (acc, nivel) => acc + nivel, 0
    )

    alert(
        `
        TREINADOR: ${treinador.nome}

        POKÉMON: ${pokemon.nome}
        TIPO: ${pokemon.tipo}

        ⚔️ ATAQUE: Nível ${pokemon.ataque}
        🛡️ DEFESA: Nível ${pokemon.defesa}
        ❤️ RESISTÊNCIA: Nível ${pokemon.resistencia}

        PODER TOTAL: ${poderTotal}
        `
    )

}
// Complementar - Rotina
function treinarPokemon(){

    const opcao = prompt(
        `
        QUAL TREINAMENTO DESEJA REALIZAR?

        1 - Treinar ataque
        2 - Treinar defesa
        3 - Treinar resistência
        `
    )

    const resultado = pokemon.treinar(opcao)

    alert(resultado)

}
// Commplementar - Rotina
function mostrarDesafios(){

    let listaDesafios = ""

    fases.forEach(function(fase){

        listaDesafios +=
        `
        FASE ${fase.numero}
        LOCAL: ${fase.local}
        ADVERSÁRIO: ${fase.inimigo}
        INTEGRANTE: ${fase.integrante}
        NÍVEL: ${fase.nivel}

        Ataque: ${fase.ataque}
        Defesa: ${fase.defesa}
        Resistência: ${fase.resistencia}

        --------------------
        `

    })

    alert(listaDesafios)

}

// Opção de buscar fase pelo número--
// Complementar - Retorno
function buscarFase(numero){

    return fases.find(fase => fase.numero === numero)

}

// Opção de verificar os atributos--
// Complementar - Retorno
function verificarAtributos(pokemon, fase){

    const atributos = [
        {
            nome: "ATAQUE",
            atual: pokemon.ataque,
            necessario: fase.ataque
        },
        {
            nome: "DEFESA",
            atual: pokemon.defesa,
            necessario: fase.defesa
        },
        {
            nome: "RESISTÊNCIA",
            atual: pokemon.resistencia,
            necessario: fase.resistencia
        }
    ]

    const atributosPendentes = atributos.filter(
        atributo => atributo.atual < atributo.necessario
    )

    return atributosPendentes

}

// Início do jogo-- Scrr

let jogoAtivo = true

const listaInimigos = fases.map(fase => fase.inimigo)

alert(
    `
    ⚡ POKÉMON RPG ⚡

    Bem-vindo à região de Kanto!

    Treinador ${treinador.nome},
    sua jornada começa agora!

    Sua missão é enfrentar os Pokémons
    da Equipe Rocket e impedir seus planos.

    Seus adversários serão:
    ${listaInimigos.join(", ")}

    Prepare seu Pokémon e boa sorte!
    `
)

for(let numeroFase = 1; numeroFase <= fases.length; numeroFase++){

    const fase = buscarFase(numeroFase)

    alert(
        `
        FASE ${fase.numero}

        LOCAL: ${fase.local}

        ADVERSÁRIO: ${fase.inimigo}
        INTEGRANTE: ${fase.integrante}
        NÍVEL: ${fase.nivel}

        Prepare-se para a batalha!
        `
    )

    while(true){

        const acao = prompt(
            `
            O QUE DESEJA FAZER?

            1 - Enfrentar Pokémon adversário
            2 - Ver status do Pokémon
            3 - Treinar Pokémon
            4 - Ver requisitos dos desafios
            5 - Desistir da jornada
            `
        )

        if(acao === "1"){

            alert(
                `${fase.integrante} enviou ${fase.inimigo} para a batalha!`
            )

            const atributosPendentes = verificarAtributos(pokemon, fase)

            if(atributosPendentes.length === 0){

                alert(
                    `
                    VITÓRIA!

                    ${pokemon.nome} derrotou ${fase.inimigo}!

                    Seus atributos foram suficientes
                    para vencer a batalha!

                    Parabéns, treinador ${treinador.nome}!
                    `
                )

                break

            }else{

                const listaPendentes = atributosPendentes.map(
                    atributo =>
                    `
                    ${atributo.nome}:
                    Seu nível: ${atributo.atual}
                    Nível necessário: ${atributo.necessario}
                    `
                ).join("\n")

                alert(
                    `
                    DERROTA!

                    ${pokemon.nome} não está preparado
                    para vencer essa batalha!

                    ATRIBUTOS QUE PRECISAM
                    SER TREINADOS:

                    ${listaPendentes}
                    `
                )

            }

        }else if(acao === "2"){

            mostrarStatus()

        }else if(acao === "3"){

            treinarPokemon()

        }else if(acao === "4"){

            mostrarDesafios()

        }else if(acao === "5"){

            jogoAtivo = false
            break

        }else{

            alert("Escolha uma opção válida.")

        }

    }

    if(jogoAtivo === false){
        break
    }

}

// Final-- To é perdida já

if(jogoAtivo === true){

    alert(
        `
        🏆 VITÓRIA FINAL!

        ${treinador.nome}, você derrotou
        todos os adversários da Equipe Rocket!

        ${pokemon.nome} foi fundamental
        para salvar a região de Kanto!

        Você se tornou um grande
        Mestre Pokémon!

        PARABÉNS, TREINADOR!
        `
    )

}else{

    alert(
        `
        SUA JORNADA FOI ENCERRADA!

        A Equipe Rocket continua
        espalhando seus planos por Kanto.

        Até a próxima aventura!
        `
    )

}
// Glória a Deus que acabou-