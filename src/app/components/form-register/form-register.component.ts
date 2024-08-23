import { Component, Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-register',
  standalone: true,
  imports: [],
  templateUrl: './form-register.component.html',
  styleUrl: './form-register.component.css'
})
export class FormRegisterComponent {
  @Input() formFlag:boolean = false ;
  @Output() continueClicked = new EventEmitter<void>();

  emitContinueEvent(event : Event) {
    event.preventDefault();
    this.continueClicked.emit();
  }
}

