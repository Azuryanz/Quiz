let quiz = [
  {
    title: 'JavaScript',
    desc: 'Um quiz de conhecimentos básicos de JavaScript.',
    questions: [
      {
        question: 'Em qual elemento HTML nós colocamos o javascript?',
        options: [
            'tag js',
            'tag script',
            'tag scripting',
            'tag javascript'
        ],
        answer: 1
      },
      {
        question: 'Onde é o local certo de colocar o javascript?',
        options: [
            'Na tag body',
            'Na tag head',
            'Tanto na tag body quanto a head estão corretas'
        ],
        answer: 2
      },
      {
        question: 'Qual a sintaxe correta para adicionar um arquivo javascript externo na tag script?',
        options: [
            'name="xxx.js"',
            'src="xxx.js"',
            'href="xxx.js"'
        ],
        answer: 1
      },
      {
        question: 'Um arquivo javascript externo precisa ter a tag script',
        options: [
            'Verdade',
            'Falso'
        ],
        answer: 1
      },
      {
        question: 'Como escrever um "Olá Mundo" em um alertbox?',
        options: [
            'alertBox("Olá Mundo")',
            'msgBox("Olá Mundo")',
            'msg("Olá Mundo")',
            'alert("Olá Mundo")'
        ],
        answer: 3
      },
      {
        question: 'Como você cria uma função no Javascript?',
        options: [
            'function:minhaFuncao()',
            'function = minhaFuncao()',
            'function minhaFuncao()'
        ],
        answer: 2
      },
      {
        question: 'Como chamar uma função chamada "minhaFuncao"?',
        options: [
            'call minhaFuncao',
            'call function minhaFuncao',
            'minhaFuncao()'
        ],
        answer: 2
      },
      {
        question: 'Como escrever uma condicional IF no Javascript?',
        options: [
            'if i = 5',
            'if i == 5 then',
            'if (i == 5)',
            'if i = 5 then'
        ],
        answer: 2
      },
      {
        question: 'Como fazer um if que executa um código caso "i" for diferente de 5',
        options: [
            'if (i != 5)',
            'if (i <> 5)',
            'if i <> 5',
            'if i =! 5 then'
        ],
        answer: 0
      },
      {
        question: 'Como o loop while começa?',
        options: [
            'while (i <= 10)',
            'while (i <= 10; i++)',
            'while i = 1 to 10'
        ],
        answer: 0
      },
    ],
  },

  {
    title: 'Pokemon',
    desc: 'Um quiz de curiosidades diversas sobre o universo de Pokémon.',
    questions: [
      {
        question: 'Lizardon é o nome em japonês de qual pokémon?',
        options: [
            'Kecleon',
            'Charizard',
            'Salamance',
            'Rayquaza'
        ],
        answer: 1
      },
      {
        question: 'Qual combinação de tipos apresenta a menor fraqueza?',
        options: [
            'Água e Terrestre',
            'Fogo e Água',
            'Inseto e Metal',
            'Noturno e Fantasma',
            'Grama e Pedra',
        ],
        answer: 3
      },
      {
        question: 'Qual Pokémons não possui nenhuma fraqueza?',
        options: [
            'Eelektross',
            'Lanturn',
            'Volcanion',
            'Metagross',
            'Todos os pokemons possuem alguma fraqueza'
        ],
        answer: 0
      },
      {
        question: 'Qual a diferença de um Pikachu macho para um Pikachu fêmea?',
        options: [
            'Um Pikachu macho possui círculos vermelhos nas bochechas, enquanto um fêmea possui corações vermelhos.',
            'Um Pikachu fêmea possui a cauda toda amarela, enquanto um macho a cauda começa marrom e termina amarela.',
            'A cauda de um Pikachu fêmea termina em fomato de coração, enquanto a do macho é reta.',
            'Não possuem diferenças visíveis'
        ],
        answer: 2
      },
      {
        question: 'Um Pokémon de natureza gentil possui que modificadores de atributos?',
        options: [
            '+Defesa e -Velocidade',
            '+Ataque especial e -Ataque',
            '+Defesa especial e -Defesa especial',
            '+Defesa especial e -Defesa',
            '+Velocida e -Defesa'
        ],
        answer: 3
      },
      {
        question: 'Dos Pokémons abaixo, qual possui uma única fraqueza de 4x dano?',
        options: [
            'Wooper',
            'Scizor',
            'Whiscash',
            'Todos os Pokémons acima',
            'Nenhum dos Pokémons acima'
        ],
        answer: 3
      },
      {
        question: 'Sem levar em conta habilidades, Pokémons do tipo Grama e Gelo possuem 7 fraquezas.',
        options: [
            'Verdadeiro',
            'Falso'
        ],
        answer: 0
      },
      {
        question: 'Existem quantos Pokémons puramente do tipo Voador?',
        options: [
            '1',
            '2',
            '3',
            '4',
            '5'
        ],
        answer: 2
      },
      {
        question: 'A seguinte habilidade é conhecida por 43 espécies de Pokémons diferentes:',
        options: [
            'Swift Swin',
            'Sturdy',
            'Levitate',
            'Intimidate',
            'Pressure'
        ],
        answer: 0
      },
      {
        question: 'Existem quantos tipos diferentes de pokebolas?',
        options: [
            '29',
            '24',
            '26',
            '27',
            '31'
        ],
        answer: 3
      },
    ]
  },

  {
    title: 'JoJo',
    desc: "Um quiz sobre os stands de JoJo's Bizarre Adventure",
    questions: [
      {
        question: 'Na parte 3 de JoJo, Stardust Crusaders, quantos stands são apresentados?',
        options: [
            '37',
            '34',
            '32',
            '45'
        ],
        answer: 1
      },
      {
        question: 'Star Platinum possui a classificação "A" em quantos dos 6 atributos?',
        options: [
            '3',
            '4',
            '5',
            '6'
        ],
        answer: 2
      },
      {
        question: 'The World possui a classificação "A" em quantos dos 6 atributos?',
        options: [
            '3',
            '4',
            '5',
            '6'
        ],
        answer: 0
      },
      {
        question: 'Em Stardust Crusaders, quantos stands são objetos?',
        options: [
            '5',
            '6',
            '4',
            '2',
            '3'
        ],
        answer: 0
      },
      {
        question: 'Em Diamons is Unbreakable, qual o stand do chef de cozinha Tonio Trussardi?',
        options: [
            'Red Hot Chili Pepper',
            'Pearl Jam',
            'Harvest',
            'Vitamin C'
        ],
        answer: 1
      },
      {
        question: 'Qual a forma do objeto responsável por despertar Stands naqueles com potencial?',
        options: [
            'Chave',
            'Espada',
            'Flecha',
            'Livro'
        ],
        answer: 2
      },
      {
        question: 'O Stand Echoes possui três formas.',
        options: [
            'Verdadeiro',
            'Falso',
        ],
        answer: 0
      },
      {
        question: 'Além do Gold Experience, que outro Stand possui uma forma Requiem?',
        options: [
            'King Crimson',
            'Echoes',
            'Silver Chariot',
            'Star Platinum'
        ],
        answer: 2
      },
      {
        question: 'Qual dos seguintes Stands não existem em JoJo?',
        options: [
            'Metallica',
            'Foo Fighters',
            'Limp Bizkit',
            'Iron Maiden',
            'Green Day'
        ],
        answer: 3
      },
      {
        question: 'Ao todo, quantos stands únicos existem?',
        options: [
            '172',
            '170',
            '175',
            '165',
            '168'
        ],
        answer: 4
      },
      
    ]
  }
]