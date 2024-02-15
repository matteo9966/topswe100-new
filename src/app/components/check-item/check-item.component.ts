import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ListItem } from 'src/app/core/interfaces/listItem.interface';

@Component({
  selector: 'app-check-item',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './check-item.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckItemComponent {
  item = input<ListItem>();
  index = input();

  get href() {
    return this.item()?.href;
  }

  get description() {
    return this.item()?.description;
  }
}
