import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu-btn',
  standalone: true,
  imports: [],
  templateUrl: './menu-btn.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuBtnComponent {

}
