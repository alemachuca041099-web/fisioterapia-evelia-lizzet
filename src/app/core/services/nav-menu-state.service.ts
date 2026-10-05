import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavMenuStateService {
  readonly isOpen = signal(false);
}
