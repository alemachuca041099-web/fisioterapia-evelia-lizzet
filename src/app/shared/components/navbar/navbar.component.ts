import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnDestroy, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { therapist, whatsappLink } from '../../../core/data/clinic-data';
import { NavMenuStateService } from '../../../core/services/nav-menu-state.service';
import { WhatsappIconComponent } from '../whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, WhatsappIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnDestroy {
  protected readonly therapist = therapist;
  protected readonly whatsappLink = whatsappLink;
  protected readonly isScrolled = signal(false);

  private readonly menuState = inject(NavMenuStateService);
  protected readonly isMenuOpen = this.menuState.isOpen;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 12);
  }

  ngOnDestroy(): void {
    this.setMenuScrollLock(false);
  }

  protected closeMenu(): void {
    this.menuState.isOpen.set(false);
    this.setMenuScrollLock(false);
  }

  protected toggleMenu(): void {
    this.menuState.isOpen.update((value) => {
      const next = !value;
      this.setMenuScrollLock(next);
      return next;
    });
  }

  private setMenuScrollLock(isLocked: boolean): void {
    const overflow = isLocked ? 'hidden' : 'auto';

    this.document.body.style.overflow = overflow;
    this.document.documentElement.style.overflow = overflow;
  }
}
