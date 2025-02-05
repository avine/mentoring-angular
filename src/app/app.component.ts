import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  count = signal(0);

  increment() {
    this.count.update((count) => count + 1);
  }

  fruits = ['pomme', 'banane'];

  addFruit() {
    this.fruits.push('kiwi');
  }
}
