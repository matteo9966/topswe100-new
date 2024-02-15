import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListPageComponent } from './pages/list-page/list-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavigationComponent, ListPageComponent],
})
export class AppComponent {
  title = 'topswe100-new';
}
