import { Component, OnInit } from '@angular/core';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginContainerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  constructor(private router: Router){

  }
  ngOnInit(): void {
    const token = localStorage.getItem('authToken');
    if(token){
      this.router.navigate(['/notices']);
    }
  }

}
