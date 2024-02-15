import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import { ListItem } from '../core/interfaces/listItem.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  problemsURL = `/assets/data/list.json`;
  httpClient = inject(HttpClient);

  getProblemsList() {
    return this.httpClient
      .get<{
        list: ListItem[];
      }>(this.problemsURL)
      .pipe(map((data) => data.list));
  }
}
