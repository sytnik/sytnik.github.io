import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-primary',
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './primary.component.html'
})
export class PrimaryComponent {
}
