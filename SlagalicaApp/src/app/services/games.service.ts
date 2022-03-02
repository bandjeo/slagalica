import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  public anagrams =  [
    {
      letters: ['t', 'n', 'c', 'a', 'l', 'd', 'a', 'h', 'i', 'j', 'm', 'a'],
      solution: 'dalmatinac'
    },
    {
      letters: ['r', 'k', 'r', 'a', 'l', 's', 'a', 'e', 'ž', 't', 'm', 'e'],
      solution: 'sekretar'
    }
  ]

  numbers = [
    {
      numbers: [0, 2, 0, 3, 19, 76],
      goal: 48
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
      text: "Sta se četvrtkom jede u firmi?",
      answer1: "Roštilj",
      answer2: "Girice",
      answer3: "Pečenje",
      answer4: "Sarma",
      right: "Girice"
    },
    {
      text: "Ko pobedjuje u ratu izmedju Ukrajine i Rusije?",
      answer1: "Ukrajina",
      answer2: "Rusija",
      answer3: "Kina",
      answer4: "Srbija",
      right: "Kina"
    },
    {
      text: "Koji je najjači deo grada?",
      answer1: "Liman",
      answer2: "Podbara",
      answer3: "Grbavica",
      answer4: "Klisa",
      right: "Liman"
    },
    {
      text: "Ko se vozi biznis klasom?",
      answer1: "Stefan",
      answer2: "Stefanija",
      answer3: "Marija",
      answer4: "Bane",
      right: "Marija"
    },
    {
      text: "Najatraktivnija plaza na Dunavu koja nudi veliki broj zabavnih sadrzaja?",
      answer1: "Štrand",
      answer2: "Čortanovacka plaza",
      answer3: "Koh Čeng",
      answer4: "Čelarevska plaza",
      right: "Čelarevska plaza"
    },
    {
      text: "Koja je najbitnija uloga u firmi?",
      answer1: "Šef",
      answer2: "Sekretarica",
      answer3: "Programer",
      answer4: "Menadžer",
      right: "Sekretarica"
    },
    {
      text: "Koliko ukupno parking mesta postoji u dvorištu FTN-Informatike?",
      answer1: "9",
      answer2: "29",
      answer3: "30",
      answer4: "0",
      right: "9"
    },
    {
      text: "Najpopularnije predgradje Novog Sad sa idealnim uslovima za porodicni zivot ?",
      answer1: "Sangaj",
      answer2: "Klisa",
      answer3: "Avijatika",
      answer4: "Čelarevo",
      right: "Čelarevo"
    },
    {
      text: "Kada je osnovana FTN-Informaika?",
      answer1: "2016",
      answer2: "2007",
      answer3: "19. vek",
      answer4: "1976",
      right: "19. vek"
    },
    {
      text: "Ko je najbolje igra slagalicu u firmi?",
      answer1: "Nikola Vlahović",
      answer2: "Stefan Colić",
      answer3: "Violeta Novaković",
      answer4: "Petrivoje Kitić",
      right: "Petrivoje Kitić"
    }
  ]

  connections = {
    question: "Povežite vlasnike sa modelima automobila",
    column1: [
      {
        id: 1,
        name: 'Violeta',
        background: 'white',
        color: 'grey'
      },
      {
        id: 2,
        name: 'Luka',
        background: 'white',
        color: 'grey'
      },
      {
        id: 3,
        name: 'Marija',
        background: 'white',
        color: 'grey'
      },

      {
        id: 4,
        name: 'Tamara',
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
        name: 'Danijela',
        background: 'white',
        color: 'grey'
      },

      {
        id: 7,
        name: 'Branko',
        background: 'white',
        color: 'grey'
      },
      {
        id: 8,
        name: 'Žega',
        background: 'white',
        color: 'grey'
      }
    ],
    column2: [
      {
        id: 3,
        name: 'A 170'
      },
      {
        id: 6,
        name: 'Astra K'
      },
      {
        id: 1,
        name: 'Swift'
      },
      {
        id: 7,
        name: 'CX5'
      },
      {
        id: 5,
        name: 'Golf'
      },
      {
        id: 2,
        name: 'A3'
      },
      {
        id: 4,
        name: 'X1'
      },
      {
        id: 8,
        name: 'Punto'
      }
    ]
  }

  associations = [
    {
      column1: {
        a: 'kvadrat',
        b: 'zgrada',
        c: 'grad',
        d: 'sprat',
        solution: 'stan'
      },
      column2: {
        a: 'apostol',
        b: 'jevanđelje',
        c: 'BG',
        d: 'mladost',
        solution: 'Luka'
      },
      column3: {
        a: 'gojenje',
        b: 'menadžer',
        c: 'Abramović',
        d: 'programerka',
        solution: 'Marina'
      },
      column4: {
        a: 'riba',
        b: 'Futog',
        c: 'tezga',
        d: 'papuče',
        solution: 'pijaca'
      },
      finalSolution: 'Liman'
    },
    {
      column1: {
        a: 'radno vreme',
        b: 'čaša',
        c: 'belo',
        d: 'sila',
        solution: 'vino'
      },
      column2: {
        a: 'organizacija',
        b: 'marina',
        c: 'zabava',
        d: 'zajednica',
        solution: 'komjuniti menadžer'
      },
      column3: {
        a: 'Ćib',
        b: 'zdravko',
        c: 'pivara',
        d: 'Bačka Palanka',
        solution: 'čelarevo'
      },
      column4: {
        a: 'vojni',
        b: 'javni prevoz',
        c: 'aleksandar vučić',
        d: 'osiguranje',
        solution: 'penzioner'
      },
      finalSolution: 'Nikola Vlahovic'
    },
  ]




}
