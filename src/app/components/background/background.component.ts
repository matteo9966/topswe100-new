import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  host: { class: 'w-full h-full bg-bg-light dark:bg-bg-dark' },
  styles: `
    :host {
      display: block;
      position: fixed;
      inset: 0;
      z-index: -1;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {}
