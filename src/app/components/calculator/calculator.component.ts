import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'innocv-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  public buttons = [7,8,9,'+',4,5,6,'-',1,2,3,'*',0,'.','=','/'];
  public result = '0';
  public firstNumber = '';
  public secondNumber = '';
  public operator = '';
  public equalPressed = false;
  constructor() { }

  ngOnInit(): void {
  }

  saveNumber(button: number | string) {
    if (this.result === '0' || this.result === '+' || this.result === '-' || this.result === '*' || this.result === '/') {
      this.result = '';
    }

    if (isNaN(Number(button))){
      // this.result = '';
      if(this.equalPressed && button === '.') {
        alert('press an operator before')
        return
      }
      switch (button) {
        case '.':
          if (!this.result.includes('.')) {
            if (!this.operator) {
              this.result = `${this.result}${String(button)}`;
              this.firstNumber = this.result;
            } else {
              this.result = `${this.result}${String(button)}`;
              this.secondNumber = this.result;
            }
          }
          break;
        case '=':
          if (this.firstNumber && this.secondNumber) {
            if (this.operator === '+') {
              this.result = String(Number(this.firstNumber) + Number(this.secondNumber));
            }
            else if (this.operator === '-') {
              this.result = String(Number(this.firstNumber) - Number(this.secondNumber));
            }
            else if (this.operator === '*') {
              this.result = String(Number(this.firstNumber) * Number(this.secondNumber));
            } else {
              this.result = String(Number(this.firstNumber) / Number(this.secondNumber));
            }
          }
          this.firstNumber = this.result;
          this.equalPressed = true;
          break;

          default:
            this.getOperator(button)
            this.equalPressed = false;
            break;
      }
    } else {
      if(this.equalPressed) {
        alert('press an operator before')
        return
      }
      if (!this.operator) {
        this.result = `${this.result}${String(button)}`;
        this.firstNumber = this.result;
      } else {
        this.result = `${this.result}${String(button)}`;
        this.secondNumber = this.result;
      }
      this.equalPressed = false;

    }

  }

  setFirstNumber(){

  }

  getOperator(button: number | string) {
    this.result = String(button);
    this.operator = this.result;
  }

  resetData() {
    this.result = '';
    this.firstNumber = '';
    this.secondNumber = '';
    this.operator = '';
    this.equalPressed = false;
  }

}
