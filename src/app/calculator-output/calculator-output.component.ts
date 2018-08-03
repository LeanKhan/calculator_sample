import { Component, OnInit } from '@angular/core';
import {buttonsArray} from '../buttons-def';

@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.css']
})
export class CalculatorOutputComponent implements OnInit {


buttons = buttonsArray;
inputString: string = "";
inputResult: any = "";
buttonAction(button){
  const numberVerify = new RegExp(/\d$/);
  const operationVerify = new RegExp(/\W$/);
  const inputField = document.getElementById('input');
  if(localStorage.getItem("inputString")){
    this.inputString = localStorage.getItem("inputString")
  }
  if(button.class == null){
    if(operationVerify.test(this.inputString)){
      // debugger;
      if(button.value == "+" ||button.value == "*" ||button.value ==  "-" ||button.value ==  "/"){
        inputField.style.color = "red";
      }else{
        this.inputString= this.inputString.concat(button.value);
        inputField.style.color = "#1e2325";
      }
    }else {     
      this.inputString= this.inputString.concat(button.value);
      inputField.style.color = "#1e2325";
    }
    // console.log(button);
  }else if(button.value == "del"){
    this.inputString = this.inputString.slice(0,this.inputString.length-1);
    this.inputResult = "";
  } else if(button.value == "C"){
    this.inputString = "";
    this.inputResult = "";
  } else if(button.value == "="){
    if(numberVerify.test(this.inputString)){
      this.inputResult = eval(this.inputString);
      this.inputString = this.inputResult;
    }else{
      confirm("Your expression must end with a digit!");
  }
  }
  localStorage.setItem('inputString', this.inputString);
  localStorage.setItem('inputResult', this.inputResult);
}
  constructor() {
 
  }

  ngOnInit() {
      
  }

}
