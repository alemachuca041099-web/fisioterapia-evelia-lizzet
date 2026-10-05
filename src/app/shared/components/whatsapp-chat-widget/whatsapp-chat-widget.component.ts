import { CommonModule } from '@angular/common';
import {
  AfterViewChecked,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewChild,
  inject,
  signal
} from '@angular/core';

import { ChatIntent, chatIntents, therapist, whatsappLink, whatsappLinkFor } from '../../../core/data/clinic-data';
import { NavMenuStateService } from '../../../core/services/nav-menu-state.service';
import { WhatsappIconComponent } from '../whatsapp-icon/whatsapp-icon.component';

type ChatMessage = {
  from: 'bot' | 'user';
  text?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

@Component({
  selector: 'app-whatsapp-chat-widget',
  standalone: true,
  imports: [CommonModule, WhatsappIconComponent],
  templateUrl: './whatsapp-chat-widget.component.html',
  styleUrl: './whatsapp-chat-widget.component.scss'
})
export class WhatsappChatWidgetComponent implements AfterViewChecked {
  @ViewChild('body') private readonly bodyRef?: ElementRef<HTMLDivElement>;

  protected readonly therapist = therapist;
  protected readonly whatsappLink = whatsappLink;
  protected readonly chatIntents = chatIntents;
  protected readonly isOpen = signal(false);
  protected readonly isVisible = signal(false);
  protected readonly messages = signal<ChatMessage[]>([
    {
      from: 'bot',
      text: `¡Hola! 👋 Soy el asistente de ${therapist.name}. Elige una opción y te respondo al momento.`
    }
  ]);

  private readonly menuState = inject(NavMenuStateService);
  private shouldScroll = false;

  @HostBinding('class.chat-widget-hidden')
  protected get hidden(): boolean {
    return !this.isVisible() || this.menuState.isOpen();
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    const visible = window.scrollY > 360;
    this.isVisible.set(visible);

    if (!visible) {
      this.isOpen.set(false);
    }
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.close();
  }

  ngAfterViewChecked(): void {
    if (this.shouldScroll && this.bodyRef) {
      this.bodyRef.nativeElement.scrollTop = this.bodyRef.nativeElement.scrollHeight;
      this.shouldScroll = false;
    }
  }

  protected toggle(): void {
    this.isOpen.update((value) => !value);
  }

  protected close(): void {
    this.isOpen.set(false);
  }

  protected selectIntent(intent: ChatIntent): void {
    const reply: ChatMessage = intent.answer
      ? { from: 'bot', text: intent.answer }
      : {
          from: 'bot',
          text: 'Eso lo tengo que revisar contigo directamente. Escríbeme por WhatsApp y seguimos ahí 👇',
          ctaLabel: 'Continuar en WhatsApp',
          ctaHref: whatsappLinkFor(intent.message)
        };

    this.messages.update((current) => [...current, { from: 'user', text: intent.label }, reply]);
    this.shouldScroll = true;
  }
}
