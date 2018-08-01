import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator-input',
  templateUrl: './calculator-input.component.html',
  styleUrls: ['./calculator-input.component.css']
})
export class CalculatorInputComponent implements OnInit {
input: any;
inputText: any= document.getElementById("input");

change(){
  this.input = 9;
}
  constructor() { }

  ngOnInit() {
  }

}
