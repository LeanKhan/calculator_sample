import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.css']
})
export class CalculatorOutputComponent implements OnInit {

inputString: string;
table: HTMLElement = document.getElementById("table-buttons");
setUpEventListener(){
  this.table.addEventListener("click",function(event){
      if(event.target){
        console.log(event);
      }
  })
}
  constructor() { 
  }

  ngOnInit() {
  }

}
