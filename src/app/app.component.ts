import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegisterContainerComponent } from './components/register-container/register-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RegisterContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'feed-RSS-G1';
}
