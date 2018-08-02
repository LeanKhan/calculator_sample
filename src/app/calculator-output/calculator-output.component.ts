import { Component, OnInit } from '@angular/core';
import {buttonsArray} from '../buttons-def';

@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.css']
})
export class CalculatorOutputComponent implements OnInit {

  buttons = buttonsArray;
inputString: string;
table: any;
setUpEventListener(): void{
  this.table.addEventListener("click",function(event){
        console.log(event);
  })
};
consoleEvent(): void {
  console.log(this.table)
}
passValue(): void{
  console.log("pressed!")
}

  constructor() {
 
  }

  ngOnInit() {
    this.table = document.getElementById("button-table");
       // this.setUpEventListener()
        this.consoleEvent() 
      
  }

}
