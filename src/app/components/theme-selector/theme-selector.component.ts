import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  ViewChild,
  signal,
} from '@angular/core';
import { NgIconComponent } from '@ng-icons/core';
import {
  matLightModeOutline,
  matDarkModeOutline,
} from '@ng-icons/material-icons/outline';
import { StateService } from 'src/app/services/state.service';

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
})
export class ThemeSelectorComponent implements AfterViewInit {
  icon = signal(matDarkModeOutline);
  stateService = inject(StateService);
  scheme = signal<'dark' | 'light'>('dark');
  @ViewChild('checkbox', { static: true }) checkbox!: ElementRef;

  constructor() {
    this.stateService.colorScheme$.subscribe((scheme) => {
      this.scheme.set(scheme);
      if (scheme === 'dark') {
        document.body.classList.add('dark');
        this.icon.set(matLightModeOutline);
      } else {
        document.body.classList.remove('dark');
        this.icon.set(matDarkModeOutline);
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.scheme() === 'dark') {
      this.initCheckbox(true);
    } else {
      this.initCheckbox(false);
    }
  }

  initCheckbox(checked: boolean) {
    if (!this.checkbox || !this.checkbox?.nativeElement) {
      return;
    }
    this.icon.update(() =>
      checked ? matLightModeOutline : matDarkModeOutline,
    );
    (<HTMLInputElement>this.checkbox.nativeElement).checked = checked;
  }

  onChangeTheme() {
    this.stateService.toggleColorScheme();
  }
}
