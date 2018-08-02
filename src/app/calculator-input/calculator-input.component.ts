import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.css']
})
export class CalculatorInputComponent implements OnInit {
inputText: any= document.getElementById("input");

outputString: string = localStorage.getItem('inputString');
outputResult: any = localStorage.getItem('inputResult');
  constructor() { 
  }

  ngOnInit() {
  }
   public get say():string{
     return localStorage.getItem('inputResult');
   }
   public get day():string{
     return localStorage.getItem('inputString');
   }
}
