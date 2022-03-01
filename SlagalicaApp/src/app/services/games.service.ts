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




}
