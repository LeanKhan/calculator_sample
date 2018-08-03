import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.css']
})
export class CalculatorInputComponent implements OnInit {
// inputText: any= document.getElementById("input");

outputString: string = localStorage.getItem('inputString');
//Used to hold the value of 'inputResult' and 'inputString' for
//validation purposes. Used in CalculatorInputComponent.html line 4 
outputResult: string = localStorage.getItem('inputResult');
  constructor() { 
  }

  ngOnInit() {
  }


  //These functions continually check the values of 'inputResult' and 'inputString' in LocalStorage
  // and returns the values to CalculatorInputComponent view.
   public get returnInputResult():string{
     return localStorage.getItem('inputResult');
   }
   public get returnInputString():string{
     return localStorage.getItem('inputString');
   }
}
