import { Component } from '@angular/core';
import { FormRegisterComponent } from '../form-register/form-register.component';

@Component({
  selector: 'app-register-container',
  standalone: true,
  imports: [FormRegisterComponent],
  templateUrl: './register-container.component.html',
  styleUrl: './register-container.component.css'
})
export class RegisterContainerComponent {

}
