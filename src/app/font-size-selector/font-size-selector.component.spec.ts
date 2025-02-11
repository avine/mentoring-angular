import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeSelectorComponent } from './font-size-selector.component';

describe('FontSizeSelectorComponent', () => {
  let component: FontSizeSelectorComponent;
  let fixture: ComponentFixture<FontSizeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontSizeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
