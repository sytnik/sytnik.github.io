import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  activePage = '';
  subscription: Subscription = new Subscription();
  isOpen = false;

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activePage = event.urlAfterRedirects;
      }
    });
  }

  goToPage(route: string  ) {
    this.router.navigate([route]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
