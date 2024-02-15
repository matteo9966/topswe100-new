import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import {
  matLightModeOutline,
  matDarkModeOutline,
} from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-theme-selector',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './theme-selector.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSelectorComponent {
  icon: string = matDarkModeOutline;

  onChangeTheme(e: Event) {
    const checked = (<HTMLInputElement>e.target).checked;
    if (checked) {
      document.body.classList.add('dark');
      this.icon = matLightModeOutline;
    } else {
      document.body.classList.remove('dark');
      this.icon = matDarkModeOutline;
    }
  }
}
