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
      text: 'Da li?',
      options: ['da', 'ne', 'mozda', 'sigurno'],
      correct: 'sigurno'
    }
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
