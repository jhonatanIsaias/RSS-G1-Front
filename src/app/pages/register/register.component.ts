import { Component } from '@angular/core';
import { RegisterContainerComponent } from './components/register-container/register-container.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RegisterContainerComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
