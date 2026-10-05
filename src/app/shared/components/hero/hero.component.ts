import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { WhatsappIconComponent } from '../whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, WhatsappIconComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  @Input() eyebrow = 'Fisioterapia a domicilio';
  @Input() title = 'Fisio a Domicilio';
  @Input() location = 'San Juan del Río y alrededores';
  @Input() tagline = 'Tu recuperación, mi compromiso.';
  @Input() subtagline = 'Volver a moverte sin dolor sí es posible.';
  @Input() tags: readonly string[] = [];
  @Input() primaryCtaLabel = 'Agendar por WhatsApp';
  @Input() primaryCtaHref = '';
  @Input() image = 'assets/images/inicio/evelia.png';
  @Input() imageAlt = 'Sesión de fisioterapia';
}
