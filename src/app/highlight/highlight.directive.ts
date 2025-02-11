import { Directive, ElementRef, inject, input, output, Renderer2, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': ' active() ? highlightColor() : null ',
    '(click)': ' toggle() ',
  },
})
export class HighlightDirective {
  elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  renderer = inject(Renderer2);

  highlightColor = input('yellow', { alias: 'appHighlight' });

  isHighlighted = output<boolean>();

  active = signal(false);

  constructor() {
    console.log(this.elementRef.nativeElement);

    // HostBinding
    this.renderer.setStyle(this.elementRef.nativeElement, 'border', '1px solid red');
    // this.elementRef.nativeElement.style.border = '1px solid red';

    // HostListener
    this.renderer.listen(this.elementRef.nativeElement, 'click', () => console.log('CLICK'));
    // this.elementRef.nativeElement.addEventListener('click', () => console.log('CLICK'));
  }

  toggle() {
    this.active.update((active) => !active);
    this.isHighlighted.emit(this.active());
  }
}
