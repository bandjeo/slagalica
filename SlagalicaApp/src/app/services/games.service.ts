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
