import { Component, Input,Output, EventEmitter } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';



@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    NgxMaskDirective,
    ],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css',
  providers: [provideNgxMask()]
})
export class FormRegisterComponent {
  @Input() formFlag:number = 1 ;
  @Output() continueClicked = new EventEmitter<void>();
  @Output() backClicked = new EventEmitter<void>();

  emitContinueEvent(event : Event) {
    event.preventDefault();
    this.continueClicked.emit();
  }

  emitBackEvent(event : Event) {
    event.preventDefault();
    this.backClicked.emit();
  }
}

