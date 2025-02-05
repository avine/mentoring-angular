import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SortListPipe } from './sort-list.pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SortListPipe, UpperCasePipe, CurrencyPipe, DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  fruits = ['pomme', 'banane'];

  addFruit() {
    this.fruits.push('kiwi');
    //this.fruits = [...this.fruits, 'kiwi'];
  }

  now = Date.now();
}
