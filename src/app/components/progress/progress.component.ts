import { NgStyle } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './progress.component.html',
  styles: `
    :host {
      display: block;
      width: 100%;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  percentage = input(100);
  protected stringPercentage = computed(() => `${this.percentage()}%`);
}
