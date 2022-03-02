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
      text: "Ko je najbolje igra slagalicu u firmi?",
      answer1: "Nikola Vlahović",
      answer2: "Stefan Colić",
      answer3: "Violeta Novaković",
      answer4: "Petrivoje Kitić",
      right: "Petrivoje Kitić"
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
      text: "Ko je najbolje igra slagalicu u firmi?",
      answer1: "Nikola",
      answer2: "Stefan",
      answer3: "Violeta",
      answer4: "Petrivoje",
      right: "Petrivoje"
    },
    {
      text: "Šta je ubedljivo najbolja hrana za proslavu u firmi?",
      answer1: "Girice",
      answer2: "Hawaii Poki",
      answer3: "Pečenje",
      answer4: "Roštilj",
      right: "Petrivoje"
    },
    {
      text: "Kada je osnovana FTN-Informaika?",
      answer1: "2016",
      answer2: "2007",
      answer3: "1960",
      answer4: "1976",
      right: "Petrivoje"
    },

  ]

  connections = [
    {
      column1: [],
      column2: [],

    }
  ]


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
