import {Component, Inject, Renderer2, DOCUMENT} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.css'
})
export class AppHeaderComponent {
  isOpen = false;
  
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document) {
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
    console.log('Menu toggled. isOpen:', this.isOpen);
  }

  closeNavbar() {
    this.isOpen = false;
  }

  toggleTheme() {
    const htmlElement = this.document.documentElement;
    if (htmlElement.classList.contains('dark')) {
      this.renderer.removeClass(htmlElement, 'dark');
      localStorage.setItem('theme', 'light');
    } else {
      this.renderer.addClass(htmlElement, 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  isLightTheme(): boolean {
    return !this.document.documentElement.classList.contains('dark');
  }
}
