import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  public anagrams =  [
    {
      letters: ['a', 't', 'c', 'a', 'u', 'd', 't', 's', 'i', 'i', 'n', 'č'],
      solution: 'autističan'
    },
    {
      letters: ['r', 'k', 'r', 'a', 'l', 's', 'a', 'e', 'ž', 't', 'm', 'e'],
      solution: 'hellyebrotha'
    }
  ]

  numbers = [
    {
      numbers: [1, 3, 3, 7, 24, 69],
      goal: 420
    }
  ]

  symbolMap = ['nikola', 'tref', 'pik', 'herc', 'karo', 'zvezda']

  symbols = [
    {
      goal: [0, 0, 0, 0]
    },
    {
      goal: [3, 0, 3, 5]
    }
  ]

  questions = [
    {
      text: "Koji je objektivno najbolji sir?",
      answer1: "Ementaler",
      answer2: "Mocarela",
      answer3: "Gorgonzola",
      answer4: "Trapist",
      right: "Trapist"
    },
    {
      text: "Šta je Filip?",
      answer1: "Filip",
      answer2: "Mađar",
      answer3: "Cigam",
      answer4: "Dobar prijatelj",
      right: "Mađar"
    },
    {
      text: "Koji je od ponuđenih odgovora u skladu sa srpskim pravopisom?",
      answer1: "Doćiću",
      answer2: "Jeli",
      answer3: "Neznam",
      answer4: "Ni sam",
      right: "Jeli"
    },
    {
      text: "Koje je objektivno najbolje mesto za jelo?",
      answer1: 'Picerija "Ciao"',
      answer2: "Za računarom",
      answer3: "Kod roditelja",
      answer4: "U trpezariji",
      right: "Kod roditelja"
    },
    {
      text: "Ko?",
      answer1: "Le",
      answer2: "Sovo",
      answer3: "BaFi",
      answer4: "Filip",
      right: "BaFi"
    },
    {
      text: "Da je Filip Biro životinju, koju životinju bi Filip Biro?",
      answer1: "Pag",
      answer2: "Ракун",
      answer3: "Ptica",
      answer4: "Pastuv",
      right: "Ракун"
    },
    {
      text: "Koja je najzabavnija društvena igra?",
      answer1: "Yamb",
      answer2: "Papirići",
      answer3: "Lorum",
      answer4: "Šah",
      right: "Yamb"
    },
    {
      text: "Kome treba terapija?",
      answer1: "Filipu, ali ne sad",
      answer2: "Ne Filipu",
      answer3: "Svima sem Filipu",
      answer4: "Filipu",
      right: "Svima sem Filipu"
    },
    {
      text: "Koji od ponuđenih filmova je najbojli?",
      answer1: "Sharknado 3",
      answer2: "The Room",
      answer3: "Drugi Deo",
      answer4: "After",
      right: "Drugi Deo"
    },
    {
      text: "Koji je najteži sport na svetu?",
      answer1: "Tenis",
      answer2: "Gimnastika",
      answer3: "Teretana",
      answer4: "Skvoš",
      right: "Skvoš"
    },
  ]

  connections = 
  [
    {
      question: "Spoj imena prijatelja sa odgovarajućim rođendanima",
      column1: [
        {
          id: 1,
          name: 'Kole',
          background: 'white',
          color: 'grey'
        },
        {
          id: 2,
          name: 'Isidora',
          background: 'white',
          color: 'grey'
        },
        {
          id: 3,
          name: 'Bane',
          background: 'white',
          color: 'grey'
        },

        {
          id: 4,
          name: 'Jovana',
          background: 'white',
          color: 'grey'
        },

        {
          id: 5,
          name: 'Pera',
          background: 'white',
          color: 'grey'
        },

        {
          id: 6,
          name: 'Žare',
          background: 'white',
          color: 'grey'
        },

        {
          id: 7,
          name: 'Jelena',
          background: 'white',
          color: 'grey'
        },
        {
          id: 8,
          name: 'Filip',
          background: 'white',
          color: 'grey'
        }
      ],
      column2: [
        {
          id: 3,
          name: '4.6.'
        },
        {
          id: 6,
          name: '8.2.'
        },
        {
          id: 1,
          name: '9.9.'
        },
        {
          id: 7,
          name: '16.5.'
        },
        {
          id: 5,
          name: '1.2.'
        },
        {
          id: 2,
          name: '10.8.'
        },
        {
          id: 4,
          name: '16.12.'
        },
        {
          id: 8,
          name: '6.4.'
        }
      ]
    },
    {
      question: "Spoj osobu sa brojem obuće",
      column1: [
        {
          id: 1,
          name: 'Kole', 
          background: 'white',
          color: 'grey'
        },
        {
          id: 2,
          name: 'Isidora',
          background: 'white',
          color: 'grey'
        },
        {
          id: 3,
          name: 'Bane',
          background: 'white',
          color: 'grey'
        },

        {
          id: 4,
          name: 'Jovana',
          background: 'white',
          color: 'grey'
        },

        {
          id: 5,
          name: 'Pera',
          background: 'white',
          color: 'grey'
        },

        {
          id: 6,
          name: 'Žare',
          background: 'white',
          color: 'grey'
        },

        {
          id: 7,
          name: 'Filip (levo stopalo)',
          background: 'white',
          color: 'grey'
        },
        {
          id: 8,
          name: 'Filip (desno stopalo)',
          background: 'white',
          color: 'grey'
        }
      ],
      column2: [
        {
          id: 3,
          name: '43'
        },
        {
          id: 6,
          name: 'Žare'
        },
        {
          id: 1,
          name: '45'
        },
        {
          id: 7,
          name: '46'
        },
        {
          id: 5,
          name: '46.5'
        },
        {
          id: 2,
          name: '38'
        },
        {
          id: 4,
          name: '39'
        },
        {
          id: 8,
          name: '47'
        }
      ]
    },
  ]

  associations = [
    {
      column1: {
        a: 'Vilijams',
        b: 'Margo',
        c: 'Roba u dativu',
        d: 'Robert',
        solution: 'Robi'
      },
      column2: {
        a: 'Posao',
        b: 'WC',
        c: 'Sekretar/ica',
        d: 'Stolica',
        solution: 'Kancelarija'
      },
      column3: {
        a: 'Demokratska stranka',
        b: 'Šah',
        c: 'Drugi Deo',
        d: 'Gaće',
        solution: 'Mikloš'
      },
      column4: {
        a: 'Ракун',
        b: 'Skvoš',
        c: 'Dobar prijatelj',
        d: 'Gaymer',
        solution: 'Filip'
      },
      finalSolution: 'Biro'
    },
    {
      column1: {
        a: 'DSM',
        b: 'Spektar',
        c: 'Hari Poter',
        d: 'Mark Zakerberg',
        solution: 'Autizam'
      },
      column2: {
        a: 'Bestie',
        b: 'Odan',
        c: 'Najbolji',
        d: 'Toksičan',
        solution: 'Prijatelj'
      },
      column3: {
        a: 'Standardna',
        b: 'Nos',
        c: 'Operacija',
        d: 'Odstupanje',
        solution: 'Devijacija'
      },
      column4: {
        a: 'Rođenje',
        b: 'Dan',
        c: 'Proslava',
        d: '5.4.',
        solution: 'Rođendan'
      },
      finalSolution: 'Filip'
    },
  ]




}
