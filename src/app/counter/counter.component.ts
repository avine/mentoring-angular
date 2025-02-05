import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss',
})
export class CounterComponent {
  count = input(0);

  countChange = output<number>();

  protected increment() {
    this.countChange.emit(this.count() + 1);
  }
}
