import { Component, Input,Output, EventEmitter, Inject } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { FormGroup, FormControl,ReactiveFormsModule, Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { FormRegisterService } from '../../../../services/form-register.service';
import User from '../../../../models/userModel';



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
    NgIf,
    NgFor
    ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
  providers: [provideNgxMask()]
})
export class FormRegisterComponent {

  constructor(private service: FormRegisterService){

  }
  @Input() formFlag:number = 1 ;
  @Output() continueClicked = new EventEmitter<void>();
  @Output() backClicked = new EventEmitter<void>();
  errors: string[] = [];





  messageSuccess: boolean = false;



  private categoriesMap: { [key: string]: number } = {
    'carros': 1,
    'ciencia': 2,
    'concursoEmpregos': 3,
    'economia': 4,
    'educacao': 5,
    'loterias': 6,
    'mundo': 7,
    'musica': 8,
    'natureza': 9,
    'planetaBizarro': 10,
    'politica': 11,
    'popArte': 12,
    'tecnologiaGames': 13,
    'turismoViagem': 14
  };


  formRegisterOne = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    secondName: new FormControl('',[Validators.required]),
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
  birthDate: new FormControl(null,Validators.required)
});

formCategories = new FormGroup({
  carros: new FormControl(false),
  cienciaSaude: new FormControl(false),
  concursoEmpregos: new FormControl(false),
  economia: new FormControl(false),
  educacao: new FormControl(false),
  loterias: new FormControl(false),
  mundo: new FormControl(false),
  musica: new FormControl(false),
  natureza: new FormControl(false),
  planetaBizarro: new FormControl(false),
  politica: new FormControl(false),
  popArte: new FormControl(false),
  tecnologiaGames: new FormControl(false),
  turismoViagem: new FormControl(false),
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

  preventDefault(event:Event){
    event.preventDefault();
  }

  userData: User = new User();

  submitForm(){
    const selectedCategories: number[] = [];

    Object.keys(this.formCategories.controls).forEach((key) => {
      if (this.formCategories.get(key)?.value) {
        selectedCategories.push(this.categoriesMap[key]);
      }
    });
    this.userData.name = `${this.formRegisterOne.get('firstName')?.value} ${this.formRegisterOne.get('secondName')?.value}`;
    this.userData.email = this.formRegisterOne.get('email')?.value;
    this.userData.password = this.formRegisterOne.get('password')?.value;
    this.userData.login = this.formRegisterTwo.get('login')?.value;
    this.userData.phone = this.formRegisterTwo.get('phone')?.value;
    this.userData.birth_date =  this.formRegisterTwo.get('birthDate')?.value;
    this.userData.status = true;
    this.userData.categories = selectedCategories;


    this.service.registerUser(this.userData).subscribe({
      next: () => {
         this.messageSuccess = true;
         setTimeout(() => {
         this.messageSuccess= false;
        }, 3000);
      },error : (error) => {
         this.errors = error.error.listErrors;
         setTimeout(() => {
          this.errors= [];
        }, 5000);
      }
    });
  }
}

