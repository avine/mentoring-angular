import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-font-size-selector',
  imports: [NgStyle],
  templateUrl: './font-size-selector.component.html',
})
export class FontSizeSelectorComponent {
  currentSize = 20;

  changeSize(event: Event) {
    this.currentSize = Number((event.target as HTMLInputElement).value);
  }
}
