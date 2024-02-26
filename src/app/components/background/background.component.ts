import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [],
  templateUrl: './background.component.html',
  host: { class: 'w-full h-full dark:bg-black/50' },
  styles: `
    :host {
      display: block;
      position: fixed;

      inset: 0;
      z-index: 0;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackgroundComponent {}
