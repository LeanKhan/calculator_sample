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
  if(localStorage.getItem("inputString")){
    this.inputString = localStorage.getItem("inputString")
  }
  if(button.class == null){
     this.inputString= this.inputString.concat(button.value);
    console.log(button);
  }else if(button.value == "del"){
    this.inputString = this.inputString.slice(0,this.inputString.length-1);
    this.inputResult = "";
  } else if(button.value == "C"){
    this.inputString = "";
    this.inputResult = "";
  } else if(button.value == "="){
    this.inputResult = eval(this.inputString);
  }
  localStorage.setItem('inputString', this.inputString);
  localStorage.setItem('inputResult', this.inputResult);
}
  constructor() {
 
  }

  ngOnInit() {
      
  }

}
