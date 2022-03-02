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

  left: any;
  right: any;

  toGuess = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.setData();
  }

  onNextClicked() {
    this.router.navigate(['/associations'])

  }

  onLeftClicked(column1Element: any) {
    if (this.left == column1Element) {
      this.left.background = 'white'
      this.left.color = 'grey'
      this.right.background = 'white'
      this.right.color = 'grey'
    }
    this.left = column1Element;
    this.left.background = 'darkgrey'
    this.left.color = 'white'
    this.toGuess = true;
  }

  onRightClicked(column2Element: any) {
    this.left.disabled = true;
    this.toGuess = false;
    if (this.left.id == column2Element.id) {
      column2Element.background = 'green';
      column2Element.color = 'white'
      column2Element.disabled = true
      this.left.background = 'green'
      this.left.color = 'white'
    } else {
      column2Element.background = 'red';
      column2Element.color = 'white'
      column2Element.disabled = true
      this.left.background = 'red'
      this.left.color = 'white'
    }

  }

  private setData() {
    this.question = "Povežite vlasnike sa modeli automobila"
    this.column1 = [
      {
        id: 1,
        name: 'Violeta',
        background: 'white',
        color: 'grey'
      },
      {
        id: 2,
        name: 'Luka',
        background: 'white',
        color: 'grey'
      },
      {
        id: 3,
        name: 'Marija',
        background: 'white',
        color: 'grey'
      },

      {
        id: 4,
        name: 'Tamara',
        background: 'white',
        color: 'grey'
      },

      {
        id: 5,
        name: 'Pera',
        background: 'white',
        color: 'grey'
      },

      {
        id: 6,
        name: 'Danijela',
        background: 'white',
        color: 'grey'
      },

      {
        id: 7,
        name: 'Branko',
        background: 'white',
        color: 'grey'
      },
      {
        id: 8,
        name: 'Žega',
        background: 'white',
        color: 'grey'
      }
    ]

    this.column2 = [
      {
        id: 3,
        car: 'A 170'
      },
      {
        id: 6,
        car: 'Astra K'
      },
      {
        id: 1,
        car: 'Swift'
      },
      {
        id: 7,
        car: 'CX5'
      },
      {
        id: 5,
        car: 'Golf'
      },
      {
        id: 2,
        car: 'A3'
      },
      {
        id: 4,
        car: 'X1'
      },
      {
        id: 8,
        car: 'Punto'
      }
    ]
  }
}
