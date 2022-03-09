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

  left: any;
  right: any;

  toGuess = false;
  done = false;
  toDo = 8;

  constructor(private router: Router, private games: GamesService) {
  }

  ngOnInit(): void {
    this.question = this.games.connections.question;
    this.column1 = this.games.connections.column1;
    this.column2 = this.games.connections.column2;
  }

  onNextClicked() {
    this.router.navigate(['/associations'])
  }

  onLeftClicked(column1Element: any) {
    this.left = column1Element;
    this.left.background = 'darkgrey'
    this.left.color = 'white'
    this.toGuess = true;
  }

  onRightClicked(column2Element: any) {
    this.left.disabled = true;
    this.toGuess = false;
    if (this.left.id == column2Element.id) {
      this.setFinalPairColor(column2Element, 'green')
    } else {
      this.setFinalPairColor(column2Element, 'red')
    }
    this.toDo -= 1
    if (this.toDo <= 0) {
      this.done = true;
    }
  }

  setFinalPairColor(right: any, color: string): void {
    right.background = color
    right.color = 'white'
    right.disabled = true
    this.left.background = color
    this.left.color = 'white'
  }
}
