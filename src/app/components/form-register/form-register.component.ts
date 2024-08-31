import { Component, Input,Output, EventEmitter } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormGroup, FormControl,ReactiveFormsModule, Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import { NgIf } from '@angular/common';



@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskDirective,
    ReactiveFormsModule,
    NgIf
    ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
  providers: [provideNgxMask()]
})
export class FormRegisterComponent {


  @Input() formFlag:number = 1 ;
  @Output() continueClicked = new EventEmitter<void>();
  @Output() backClicked = new EventEmitter<void>();
  


  formRegisterOne = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(8)]),
    secondName: new FormControl('',[Validators.required,Validators.minLength(8)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$')]),
    confirmPassword: new FormControl('',[Validators.required])
 },{ validators: this.passwordMatchValidator });

 formRegisterTwo = new FormGroup({
  login: new FormControl('',Validators.required),
  phone: new FormControl('',Validators.required),
  birthDate: new FormControl('',Validators.required)
});

passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { passwordsDoNotMatch: true };
  }
  return null;
}

  emitContinueEvent(event : Event) {
    event.preventDefault();
    this.continueClicked.emit();
  }


  emitBackEvent(event : Event) {
    event.preventDefault();
    this.backClicked.emit();
  }


}

