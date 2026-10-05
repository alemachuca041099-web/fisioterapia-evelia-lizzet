import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { therapist, whatsappLink } from '../../../core/data/clinic-data';
import { WhatsappIconComponent } from '../whatsapp-icon/whatsapp-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, WhatsappIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected readonly therapist = therapist;
  protected readonly whatsappLink = whatsappLink;
  protected readonly year = new Date().getFullYear();
}
