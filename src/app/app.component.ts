import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontSizeSelectorComponent } from './font-size-selector/font-size-selector.component';
import { HighlightDirective } from './highlight/highlight.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontSizeSelectorComponent, HighlightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'mentoring-angular';

  value = false;
}
