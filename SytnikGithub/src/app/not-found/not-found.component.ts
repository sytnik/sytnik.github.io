import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: './not-found.component.html',
})
export class NotFoundComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }
}
