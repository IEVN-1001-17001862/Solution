// translation.service.ts

import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root', 
})
export class TranslationService {
  constructor(private translocoService: TranslocoService) {}

  setLanguage(language: string): void {
    this.translocoService.setActiveLang(language);
  }
}
