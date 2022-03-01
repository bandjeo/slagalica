import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.css']
})
export class AssociationsComponent implements OnInit {

  association: any = {}
  currentAssoc = 0;

  buttonMap: any;

  openNewField = true;
  openFieldCounter = 0;

  solutionsEnabled: any = {
    column1: false,
    column2: false,
    column3: false,
    column4: false,
    final: false
  }

  finalSolution = {
    text: '',
    done: false
  }


  constructor(private games: GamesService,
    private router: Router) { 
    this.setButtonMap()
   }

  ngOnInit(): void {
    this.association = this.games.associations[0];
  }


  onButtonClick(column: string, field: string) {
    this.openField(column, field);
    this.solutionsEnabled[column] = true;
    this.openFieldCounter += 1;
    this.openNewField = false;
  }

  openField(column: string, field: string) {
    this.buttonMap[column][field].disabled = true;
    this.buttonMap[column][field].text = this.association[column][field];
  }

  onSolutionInput(column: string, event: Event) {
    const value = (event.target as HTMLInputElement).value;

    if (this.association[column].solution.toLowerCase() == value.toLowerCase()) {
      this.solveColumn(column);
      this.solutionsEnabled.final = true;
    } else {
      console.log(this.buttonMap[column].solution.text)
      this.buttonMap[column].solution.text = ''    
      if (this.openFieldCounter < 16) {
        this.openNewField = true;
      }
    }
  }

  solveColumn(column: string) {
    this.buttonMap[column].solution.done = true;
    this.buttonMap[column].solution.text = this.association[column].solution;
    this.openField(column, 'a')
    this.openField(column, 'b')
    this.openField(column, 'c')
    this.openField(column, 'd')

  }

  onFinalSolutionInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    if (this.openFieldCounter < 16) {
      this.openNewField = true;
    }
    if (this.association.finalSolution.toLowerCase() == value.toLowerCase()) {
      this.finalSolution.text = this.association.finalSolution;
      this.finalSolution.done = true;
      this.solveColumn('column1')
      this.solveColumn('column2')
      this.solveColumn('column3')
      this.solveColumn('column4')
    } else {
      this.finalSolution.text = '';
    }
  }

  onNextClicked() {
    this.currentAssoc += 1
    if (this.currentAssoc > this.games.associations.length - 1) {
      this.router.navigate(['/congrats']);
    } else {
      this.association = this.games.associations[this.currentAssoc];
      this.setButtonMap();
      this.finalSolution = {
        text: '',
        done: false
      }
      this.openNewField = true;
      this.openFieldCounter = 0;
      this.solutionsEnabled = {
        column1: false,
        column2: false,
        column3: false,
        column4: false,
        final: false
      }
    }
  }

  setButtonMap() {
    this.buttonMap = {
      column1: {
        a: {
          text: 'a1',
          disabled: false,
        },
        b: {
          text: 'a2',
          disabled: false
        },
        c: {
          text: 'a3',
          disabled: false
        },
        d: {
          text: 'a4',
          disabled: false
        },
        solution: {
          text: '',
          done: false
        }
      },
      column2: {
        a: {
          text: 'b1',
          disabled: false,
        },
        b: {
          text: 'b2',
          disabled: false
        },
        c: {
          text: 'b3',
          disabled: false
        },
        d: {
          text: 'b4',
          disabled: false
        },
        solution: {
          text: '',
          done: false
        }
      },
      column3: {
        a: {
          text: 'c1',
          disabled: false,
        },
        b: {
          text: 'c2',
          disabled: false
        },
        c: {
          text: 'c3',
          disabled: false
        },
        d: {
          text: 'c4',
          disabled: false
        },
        solution: {
          text: '',
          done: false
        }
      },
      column4: {
        a: {
          text: 'd1',
          disabled: false,
        },
        b: {
          text: 'd2',
          disabled: false
        },
        c: {
          text: 'd3',
          disabled: false
        },
        d: {
          text: 'd4',
          disabled: false
        },
        solution: {
          text: '',
          done: false
        }
      },
    }
  }

}
