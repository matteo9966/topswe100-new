import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ThemeSelectorComponent],
  templateUrl: './navigation.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
