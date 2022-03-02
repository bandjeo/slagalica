import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-symbols',
  templateUrl: './symbols.component.html',
  styleUrls: ['./symbols.component.css']
})
export class SymbolsComponent implements OnInit {
  goal:any = []

  verticalArray = [0, 1, 2, 3, 4, 5]


  comboHistory: any[] = [];
  correctnessHistory: any[] = [];

  currentCombo = [-1, -1, -1, -1];
  ready = false;


  currentSymbols = 0;
  symbolMap:any = {
    "0": 'nikola-vlahovic.png',
    "1": 'tref.png',
    "2": 'pik.png',
    "3": 'herc.png',
    "4": 'karo.png',
    "5": 'star.jpeg'
  }

  done = false;

  constructor(private games: GamesService,
    private router: Router) { }

  ngOnInit(): void {
    this.goal = this.games.symbols[0].goal;
  }

  symbolClicked(symbol: number) {
    for (let i in this.currentCombo) {
      if (this.currentCombo[i] == -1) {
        this.currentCombo[i] = symbol
        break;
      }
    }
    if (!this.currentCombo.includes(-1)) {
      this.ready = true;
    }
  }

  removeSymbol(index: number) {
    this.currentCombo[index] = -1;
    this.ready = false;
  }

  submitCombo() {
    this.comboHistory.push([...this.currentCombo])
    this.correctnessHistory.push(this.getCorrectnes())
    if(this.compareCombos()) {
      this.done = true;
    }
    if(this.comboHistory.length >= 6) {
      this.done = true;
    }
    
    this.currentCombo = [-1, -1, -1, -1]
    this.ready = false;
  }

  compareCombos() {
    if (this.currentCombo.length != this.goal.length) {
      return false;
    }

    for (let i in this.currentCombo) {
      if (this.currentCombo[i] != this.goal[i]) return false;
    }
    return true;
  }

  getCorrectnes() {
    let combo = [...this.currentCombo]
    let goal = [...this.goal]
    let correctness = [];

    for (let i in combo) {
      if (combo[i] == goal[i]) {
        correctness.push(true);
        combo[i] = -1
        goal[i] = -1
      }
    }
    
    for (let i in combo) {
      if (combo[i] < 0) continue;
      for (let j in goal) {
        if(goal[j] < 0) continue
        if (combo[i] == goal[j]) {
          correctness.push(false)
          combo[i] = -1
          goal[j] = -1
        }
      }
    }
    return correctness
  }

  nextClicked() {
    this.currentSymbols += 1;
    if (this.currentSymbols + 1 > this.games.symbols.length) {
      this.router.navigate(['questions'])
    } else {
      this.goal = this.games.symbols[this.currentSymbols].goal
      this.comboHistory = [];
      this.correctnessHistory = [];
      this.currentCombo = [-1, -1, -1, -1]
      this.done = false;
    }
  }

}
