import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {GamesService} from "../../services/games.service";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: any;
  question: any;
  answered: boolean = false;

  constructor(private router: Router,
              private games: GamesService) {
  }

  ngOnInit(): void {
    this.setQuestions();
    this.questions = this.games.questions;
    this.question = this.questions.shift();
  }

  private setQuestions() {
    this.questions = []
  }

  isRight(clickedAnswer: string): boolean {
    return clickedAnswer === this.question.right && this.answered;
  }

  isWrong(clickedAnswer: string): boolean {
    return clickedAnswer !== this.question.right && this.answered;
  }

  onAnswerClicked(): void {
    this.answered = true;
  }


  onNextClicked() {
    if (this.questions.length == 0) {
      this.router.navigate(['/connections'])
    } else {
      this.answered = false;
      this.question = this.questions.shift()
    }
  }

}
