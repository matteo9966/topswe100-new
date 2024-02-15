import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CheckContainerComponent } from 'src/app/check-container/check-container.component';
import { CheckItemComponent } from 'src/app/components/check-item/check-item.component';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CheckContainerComponent, CheckItemComponent],
  templateUrl: './list-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent {}
