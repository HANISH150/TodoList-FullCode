import { Component, Inject, Renderer2 } from '@angular/core';


@Component({
  selector: 'app-scroll-to-top-button',
  template: `
    <button (click)="scrollToTop()" class="scroll-to-top-button">
    <i class="fa-solid fa-arrow-up fa-lg text-light"></i>
    </button>
  `,
  styleUrls: ['./scroll-to-top-button.component.css']
})
export class ScrollToTopButtonComponent {
  constructor(@Inject(Renderer2) private renderer: Renderer2) {}

  scrollToTop() {
    // Scroll to top logic
    this.renderer.setProperty(document.documentElement, 'scrollTop', 0);
  }
}
