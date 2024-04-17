import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppHeaderComponent} from './app-header/app-header.component';
import {fadeInAnimation} from './animation';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RouterOutlet, AppHeaderComponent],
  animations: [fadeInAnimation]
})
export class AppComponent {
}
