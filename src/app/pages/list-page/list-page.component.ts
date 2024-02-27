import { JsonPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { CheckContainerComponent } from 'src/app/check-container/check-container.component';
import { CheckItemComponent } from 'src/app/components/check-item/check-item.component';
import { ListItem } from 'src/app/core/interfaces/listItem.interface';
import { HttpService } from 'src/app/services/http.service';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list-page',
  standalone: true,
  imports: [CheckContainerComponent, CheckItemComponent, JsonPipe],
  templateUrl: './list-page.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPageComponent implements OnInit {
  httpService = inject(HttpService);
  state = inject(StateService);
  problemListWithStatus = this.state.problemsWithCompletedStatus;

  ngOnInit(): void {
    this.httpService.getProblemsList().subscribe((list) => {
      this.state.setList(list);
    });
  }

  onCheck(event: { id: string; checked: boolean }) {
    this.state.updateCompletedTasks(event.id, event.checked);
  }
}
