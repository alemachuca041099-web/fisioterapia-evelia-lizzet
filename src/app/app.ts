import { Component, DestroyRef, inject, signal } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet
} from '@angular/router';

import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { ScrollTopButtonComponent } from './shared/components/scroll-top-button/scroll-top-button.component';
import { WhatsappChatWidgetComponent } from './shared/components/whatsapp-chat-widget/whatsapp-chat-widget.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, ScrollTopButtonComponent, WhatsappChatWidgetComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  protected readonly title = 'Fisio a Domicilio';
  protected readonly showLoader = signal(true);
  protected readonly isLoaderLeaving = signal(false);
  protected readonly isRouteTransitioning = signal(false);

  constructor() {
    if (typeof window === 'undefined') {
      this.showLoader.set(false);
      return;
    }

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    const timeouts: number[] = [];
    const routeTimeouts: number[] = [];
    let detached = false;

    const queueTimeout = (callback: () => void, delay: number) => {
      const timeoutId = window.setTimeout(callback, delay);
      timeouts.push(timeoutId);
    };

    const startLoaderExit = () => {
      if (detached) {
        return;
      }

      queueTimeout(() => {
        this.isLoaderLeaving.set(true);
      }, 1500);

      queueTimeout(() => {
        this.showLoader.set(false);
      }, 2550);
    };

    if (document.readyState === 'complete') {
      startLoaderExit();
    } else {
      const onWindowLoad = () => startLoaderExit();
      window.addEventListener('load', onWindowLoad, { once: true });
      this.destroyRef.onDestroy(() => {
        window.removeEventListener('load', onWindowLoad);
      });
    }

    this.destroyRef.onDestroy(() => {
      detached = true;
      timeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    });

    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isRouteTransitioning.set(true);
        return;
      }

      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        const timeoutId = window.setTimeout(() => {
          this.isRouteTransitioning.set(false);
        }, 420);
        routeTimeouts.push(timeoutId);
      }
    });

    this.destroyRef.onDestroy(() => {
      routerSubscription.unsubscribe();
      routeTimeouts.forEach((timeoutId) => window.clearTimeout(timeoutId));
    });
  }
}
