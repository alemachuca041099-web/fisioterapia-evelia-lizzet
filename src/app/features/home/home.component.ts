import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import {
  benefits,
  coverage,
  faqs,
  processSteps,
  services,
  testimonials,
  therapist,
  whatsappLink
} from '../../core/data/clinic-data';
import { SeoService } from '../../core/services/seo.service';
import { FaqComponent } from '../../shared/components/faq/faq.component';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { TestimonialsComponent } from '../../shared/components/testimonials/testimonials.component';
import { WhatsappIconComponent } from '../../shared/components/whatsapp-icon/whatsapp-icon.component';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, TestimonialsComponent, FaqComponent, WhatsappIconComponent, RevealDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly therapist = therapist;
  protected readonly whatsappLink = whatsappLink;
  protected readonly benefits = benefits;
  protected readonly services = services;
  protected readonly testimonials = testimonials;
  protected readonly faqs = faqs;
  protected readonly processSteps = processSteps;
  protected readonly coverage = coverage;
  protected readonly heroTags = [...services.map((service) => service.title), 'y más...'];

  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Fisioterapia a domicilio',
      description:
        'Fisio a domicilio con la LFT. Evelia Lizzet en San Juan del Río y alrededores. Dolor de espalda, lesiones, post-operatorio, adulto mayor, deportiva y neurológica.',
      path: '/'
    });
  }
}
