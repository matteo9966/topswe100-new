import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { BackgroundComponent } from './components/background/background.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavigationComponent, ListPageComponent, BackgroundComponent],
})
export class AppComponent {
  title = 'topswe100-new';
}
