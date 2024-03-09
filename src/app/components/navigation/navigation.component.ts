import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';

import { ThemeSelectorComponent } from '../theme-selector/theme-selector.component';
import { ProgressComponent } from '../progress/progress.component';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ThemeSelectorComponent, ProgressComponent],
  templateUrl: './navigation.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  stateService = inject(StateService);
  percentage = computed(() => {
    const problemList = this.stateService.problemsWithCompletedStatus();
    const completedProblemsCount = problemList.reduce((acc, cur) => {
      return cur.completed ? acc + 1 : acc;
    }, 0);
    if (problemList.length === 0) return 0;
    return Math.floor((completedProblemsCount / problemList.length) * 100);
  });
}
