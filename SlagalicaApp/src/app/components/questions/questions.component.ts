import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions: any;
  question: any;
  answered: boolean = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.setQuestions();
    this.question = this.questions.shift();
  }

  private setQuestions() {
    this.questions = [
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
        answer1: "Nikola",
        answer2: "Stefan",
        answer3: "Violeta",
        answer4: "Petrivoje",
        right: "Petrivoje"
      }
    ]
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
