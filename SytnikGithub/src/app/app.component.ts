import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AppHeaderComponent} from './app-header/app-header.component';
import {fadeInAnimation} from './animation';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    imports: [RouterOutlet, AppHeaderComponent],
    changeDetection: ChangeDetectionStrategy.Eager,
    animations: [fadeInAnimation]
})
export class AppComponent {
}
