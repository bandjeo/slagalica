import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-my-number',
  templateUrl: './my-number.component.html',
  styleUrls: ['./my-number.component.css']
})
export class MyNumberComponent implements OnInit {

  numbers: any = {}
  currentNumbers = 0;

  text = '';
  clicked = Array(6).fill(false);

  submitted = false;

  symbols = ['+', '-', '*', '/', '(', ')']

  constructor(private games: GamesService,
    private router: Router) { }

  ngOnInit(): void {
    this.numbers = this.games.numbers[0]
  }

  onClear() {
    this.text = '';
    this.clicked = Array(6).fill(false);
  }

  onNumberClicked(index: number) {
    if (this.isNumeric(this.text[this.text.length-1])) return;
    this.clicked[index] = true;
    this.text += this.numbers.numbers[index]
  }

  onSymbolClicked(symbol: string) {
    this.text += symbol;
  }

  onSubmit() {
    this.submitted = true;
    const result = eval(this.text) || 'Greska';
    this.text += '=' + result;
  }

  onNext() {

    this.currentNumbers += 1;
    if (this.currentNumbers + 1 > this.games.numbers.length) {
      this.router.navigate(['/symbols'])
    } else {
      this.numbers = this.games.anagrams[this.currentNumbers]
      this.submitted = false;
      this.onClear();
    }
  }

  isNumeric(value: string) {
    return /^-?\d+$/.test(value);
}

}
