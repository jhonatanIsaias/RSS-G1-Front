import { Component } from '@angular/core';
import { LoginFormComponent } from '../login-form/login-form.component';

@Component({
  selector: 'app-login-container',
  standalone: true,
  imports: [LoginFormComponent],
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.css'
})
export class LoginContainerComponent {

}
