import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormLoginService } from '../../../../services/form-login.service';
import Login from '../../../../models/loginModel';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  formLogin = new FormGroup({
    login: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  errorLogin:string = '';

  constructor(private LoginService :  FormLoginService, private router: Router) {

  }
    loginAuth: Login = new Login();

  submitForm(e : Event){

   this.loginAuth.login = this.formLogin.get('login')?.value;
   this.loginAuth.password = this.formLogin.get('password')?.value;
      this.LoginService.login(this.loginAuth).subscribe({
        next: (token:string)=>{
          sessionStorage.setItem('authToken', token);
          this.router.navigate(['/notices'])
        },
        error: () => this.errorLogin = 'usuário ou senha inválidos'
      } );
     e.preventDefault();
  }
}
