import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

type SeoConfig = {
  title: string;
  description: string;
  image?: string;
  path?: string;
};

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private readonly title: Title,
    private readonly meta: Meta,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  update(config: SeoConfig): void {
    const siteName = 'Fisio a Domicilio';
    const fullTitle = `${config.title} | ${siteName}`;
    const canonicalUrl = new URL(config.path ?? '', this.document.location.origin).toString();
    const imageUrl = new URL(
      config.image ?? 'assets/images/inicio/evelia.png',
      this.document.location.origin
    ).toString();

    this.title.setTitle(fullTitle);
    this.updateTag('name', 'description', config.description);
    this.updateTag('property', 'og:title', fullTitle);
    this.updateTag('property', 'og:description', config.description);
    this.updateTag('property', 'og:type', 'website');
    this.updateTag('property', 'og:url', canonicalUrl);
    this.updateTag('property', 'og:image', imageUrl);
    this.updateTag('name', 'twitter:card', 'summary_large_image');
    this.updateTag('name', 'twitter:title', fullTitle);
    this.updateTag('name', 'twitter:description', config.description);
    this.ensureCanonical(canonicalUrl);
  }

  private updateTag(attribute: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attribute]: key, content });
  }

  private ensureCanonical(url: string): void {
    let link = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', url);
  }
}
