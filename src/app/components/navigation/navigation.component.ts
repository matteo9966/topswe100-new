import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MenuBtnComponent } from 'src/app/components/menu-btn/menu-btn.component';
import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MenuBtnComponent, ThemeSelectorComponent],
  templateUrl: './navigation.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {}
