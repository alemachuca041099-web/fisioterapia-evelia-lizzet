import { Component, Input } from '@angular/core';

import { FaqItem } from '../../../core/data/clinic-data';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  @Input({ required: true }) items: FaqItem[] = [];
}
