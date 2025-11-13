import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-root',
  imports: [TranslocoModule],
  template: `
    <ng-container *transloco="let t">
      <h1>{{ t('TITLE') }}</h1>
      <button (click)="changeLang('tr')">{{ t('LANGUAGE.TR') }}</button>
      <button (click)="changeLang('en')">{{ t('LANGUAGE.EN') }}</button>
    </ng-container>
  `,
})
export class App implements AfterViewInit {
  readonly #transloco = inject(TranslocoService);

  constructor() {
    const lang = localStorage.getItem('lang') ?? 'en'; // hafızaya saklama, default en geliyor ama ne seçersen sen değiştirene kadar sayfa yenilediğinde senin seçtiğin kalıyor
    this.#transloco.setActiveLang(lang);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const title = this.#transloco.translate('TITLE');
      console.log(title);
    }, 1000);
  }

  changeLang(lang: string) {
    this.#transloco.setActiveLang(lang);
    localStorage.setItem('lang', lang);
  }
}
