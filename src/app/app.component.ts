import { Component } from '@angular/core';
import { NavigationComponent } from './components/navigation/navigation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavigationComponent],
})
export class AppComponent {
  title = 'topswe100-new';
}
