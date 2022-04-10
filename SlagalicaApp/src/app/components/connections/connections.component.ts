import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  question: any;
  column1: any;
  column2: any;
  connections: any;
  currentConnections = 0;

  left: any;
  right: any;

  toGuess = false;
  guesses = 0;
  done = false;

  constructor(private router: Router, private games: GamesService) {
  }

  ngOnInit(): void {
    this.connections = this.games.connections[0]
    this.currentConnections = 0;
    this.setGameState()
  }

  setGameState() {
    this.question = this.connections.question;
    this.column1 = this.connections.column1;
    this.column2 = this.connections.column2;

  }

  onNextClicked() {
    this.currentConnections += 1;
    if (this.currentConnections + 1 > this.games.connections.length) {
      this.router.navigate(['associations'])
    } else {
      this.connections = this.games.connections[this.currentConnections]
      this.setGameState()
      this.left = null;
      this.right = null;
      this.guesses = 0;
      this.toGuess = false;
    }
  }

  onLeftClicked(column1Element: any) {
    this.left = column1Element;
    this.left.background = 'darkgrey'
    this.left.color = 'white'
    this.toGuess = true;
    this.done = false;
  }

  onRightClicked(column2Element: any) {
    this.guesses += 1
    this.left.disabled = true;
    this.toGuess = false;
    if (this.left.id == column2Element.id) {
      this.setFinalPairColor('green', column2Element)
    } else {
      this.setFinalPairColor('red')
    }
    if (this.guesses == 8) {
      this.done = true;
      this.sortAnswers();
    }
  }

  setFinalPairColor( color: string, right?: any): void {
    if (right) {
      right.background = color
      right.color = 'white'
      right.disabled = true

    }
    this.left.background = color
    this.left.color = 'white'
  }

  sortAnswers() {
    for (let elem of this.column2) {
      if (!elem.background) {
        elem.background = 'red'
        elem.color = 'white'
        elem.disabled = true
      }
    }
    let newColumn2 = [...this.column2].sort((a: any, b: any) => a.id - b.id)
    this.column2 = newColumn2
  }
}
