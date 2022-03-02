import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  public anagrams =  [
    {
      letters: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'],
      solution: 'abcd'
    }
  ]

  numbers = [
    {
      numbers: [1, 2, 3, 4, 10, 20],
      goal: 40
    }
  ]

  symbolMap = ['nikola', 'tref', 'pik', 'herc', 'karo', 'zvezda']

  symbols = [
    {
      goal: [0, 0, 0, 0]
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
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        solution: 'e'
      },
      column2: {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        solution: 'e'
      },
      column3: {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        solution: 'e'
      },
      column4: {
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        solution: 'e'
      },
      finalSolution: 'f'
    }
  ]




}
