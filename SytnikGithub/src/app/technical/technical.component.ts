
import {Component, Inject, DOCUMENT, ChangeDetectionStrategy} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-technical',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './technical.component.html'
})
export class TechnicalComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  isLightTheme(): boolean {
    return this.document.body.getAttribute('data-bs-theme') === 'light';
  }
}
