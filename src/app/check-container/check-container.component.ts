import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-check-container',
  standalone: true,
  imports: [],
  templateUrl: './check-container.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckContainerComponent {}
