import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.css']
})
export class ConnectionsComponent implements OnInit {
  question: any;
  column1: any;
  column2: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.question = "Pitanje 1"
    this.column1 = ['first', 'second', 'third', 'fourth', 'fifth']
    this.column2 = ['first', 'second', 'third', 'fourth', 'fifth']

  }

  onAnswerClicked() {

  }

  onNextClicked() {
    this.router.navigate(['/associations'])

  }
}
