import {Component, Inject, Renderer2, DOCUMENT, ChangeDetectionStrategy} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './app-header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
  }

  closeNavbar() {
    this.isOpen = false;
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
