import { Component, Input } from '@angular/core';

import { TestimonialItem } from '../../../core/data/clinic-data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
  @Input({ required: true }) items: TestimonialItem[] = [];
}
