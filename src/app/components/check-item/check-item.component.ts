import {
  ChangeDetectionStrategy,
  Component,
  input,
  EventEmitter,
  Output,
} from '@angular/core';
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
  @Output() onCheck = new EventEmitter<{ id: string; checked: boolean }>();
  item = input<ListItem>();
  index = input();
  checked = input<boolean>();

  get href() {
    return this.item()?.href;
  }

  get description() {
    return this.item()?.description;
  }

  onChange() {
    if (!this.item() || !this.item()?.href) {
      return;
    }
    this.onCheck.emit({ checked: !this.checked(), id: this.item()!.href });
  }
}
