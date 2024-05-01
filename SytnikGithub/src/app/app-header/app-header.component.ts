import {DOCUMENT} from '@angular/common';
import {Component, Inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
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

  constructor(
    private router: Router,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.subscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.activePage = event.urlAfterRedirects;
      }
    });
  }

  goToPage(route: string) {
    this.router.navigate([route]);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  toggleTheme() {
    const body = this.document.body;
    const currentTheme = body.getAttribute('data-bs-theme') === 'light' ? 'light' : 'dark';
    this.renderer.setAttribute(body, 'data-bs-theme', currentTheme === 'light' ? 'dark' : 'light');
  }

  isLightTheme(): boolean {
    return this.document.body.getAttribute('data-bs-theme') === 'light';
  }
}
