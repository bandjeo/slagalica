import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {

  anagram: any = {}

  buttonsChecked = Array(12).fill(false);
  text = ''
  positions: number[] = [];

  submitted = false;

  currentAnagram = 0;

  constructor(public games: GamesService,
    private router: Router) { }

  ngOnInit(): void {
    this.anagram = this.games.anagrams[0]
  }

  letterClicked(index: number) {
    console.log(index)
    this.buttonsChecked[index] = true;
    this.text += this.anagram.letters[index]
    this.positions.push(index);
  }

  deleteClicked() {
    this.text = this.text.substring(0, this.text.length-2);
    const index = this.positions.pop() || 0;
    this.buttonsChecked[index] = false;
  }

  deleteAllClicked() {
    this.buttonsChecked = Array(12).fill(false);
    this.text = '';
    this.positions = [];
  }

  submitClicked() {
    this.submitted = true;
  }

  nextClicked() {
    this.currentAnagram += 1;
    if (this.currentAnagram + 1 > this.games.anagrams.length) {
      this.router.navigate(['/numbers'])
    } else {
      this.anagram = this.games.anagrams[this.currentAnagram]
      this.submitted = false;
      this.deleteAllClicked();
    }
  }

}
