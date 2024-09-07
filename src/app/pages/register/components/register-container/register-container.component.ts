import { AfterContentChecked, Component } from '@angular/core';
import { FormRegisterComponent } from '../form-register/form-register.component';
import { NgStyle } from '@angular/common';


@Component({
  selector: 'app-register-container',
  standalone: true,
  imports: [FormRegisterComponent, NgStyle],
  templateUrl: './register-container.component.html',
  styleUrl: './register-container.component.css'
})
export class RegisterContainerComponent implements AfterContentChecked {


  selectFlag: number = 1;
  color_select1 = "";
  color_select2 = "";
  color_select3 = "";

  colorSelect() {
    if (this.selectFlag == 1) {
      this.color_select1 = "#920305";
      this.color_select2 = "#a39999";
      this.color_select3 = "#a39999";
    }
    else if (this.selectFlag == 2) {
      this.color_select1 = "#a39999";
      this.color_select2 = "#920305";
      this.color_select3 = "#a39999";
    }
    else {
      this.color_select1 = "#a39999";
      this.color_select2 = "#a39999";
      this.color_select3 = "#920305";
    }
  }
  handleContinueClick() {
    this.selectFlag++;
  }

  handleBackClick() {
    this.selectFlag--;
  }
  ngAfterContentChecked(): void {
    this.colorSelect();
  }
}


