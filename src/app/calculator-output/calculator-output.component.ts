import { Component, OnInit } from '@angular/core';
import {buttonsArray} from '../buttons-def';

@Component({
  selector: 'app-calculator-output',
  templateUrl: './calculator-output.component.html',
  styleUrls: ['./calculator-output.component.css']
})
export class CalculatorOutputComponent implements OnInit {

// Definition of key variables
//.
//.
//.
// 'buttons' variable that contains the Buttons Array
buttons = buttonsArray;

//inputString variable that is saved in LocalStorage as 'inputString'
//inputString holds all calculations and expressions before they are evaluated
inputString: string = "";

//inputString variable that is saved in LocalStorage as 'inputResult'
//inputResult holds the result of the calculation after inputString is evaluated 
inputResult: any = "";

  constructor() {
 
  }

  ngOnInit() {
      
  }

//buttonAction() function is called everytime a button is pressed. Event binding is found in CalculatorOutputComponent
  buttonAction(button) 
  //This attribute represents the 'button' obj passed into 
  //the onClick function from CalculatorOutputComponent.ts line 5
  {

    //Defining variables
    //.
    //.
    //numberVerify Regular Expression used to validate inputString
    //the RegExp matches digits, [0-9] , at the end of a string: line 82
    const numberVerify = new RegExp(/\d$/);

    //operatorVerify RegularExpression used to validate inputString
    //the RegExp matches non-digits (&, *, /) at the end of a string: line 60
    const operatorVerify = new RegExp(/\W$/);

    //inputField constant the contains the 'Input' field element on CalculatorInputComponent template file
    const inputField: HTMLElement = document.getElementById('input');

    if(localStorage.getItem("inputString")) //Checks if 'inputString' key in LocalStorage has a value
    {
      this.inputString = localStorage.getItem("inputString")//if above condition is true pushes the value to the inputString variable 
    }

    if(button.class == null) //Checks if the class property of 'button' obj is set to null.Number and Operator buttons
    //are set to null.
    {
      if(operatorVerify.test(this.inputString))  //Uses the RegExp in line 49 to verify that inputString ends in an operator
      {
        if(button.value == "+" ||button.value == "*" ||button.value ==  "-" ||button.value ==  "/" || button.value == "%")
        //If above is true, check if the proceeding button pressed is either of these: +,*,-,/,% 
        {
          inputField.style.color = "red"; //If above is true, turn text red as a sort of warning signal :)
        }else{
          this.inputString= this.inputString.concat(button.value); //If false, concat button value to inputString as normal
          inputField.style.color = "#1e2325";//Revert text color back to original
        }
      } else { //If inputString doesn't end in operator at all, concat inputString to button value as normal    
        this.inputString= this.inputString.concat(button.value);
        inputField.style.color = "#1e2325";//Revert text color back to original
             }
    }else if(button.value == "del"){ //If button.class is not 'null' check if button.value is 'del'
      this.inputString = this.inputString.slice(0,this.inputString.length-1);//If true pop last value of the string
      this.inputResult = ""; //Clear 'inputResult'
      inputField.style.color = "#1e2325" //Result text color back to original
    } else if(button.value == "C"){ //If button.value is 'C' clear both 'inputString' and 'inputResult'
      this.inputString = "";
      this.inputResult = "";
      inputField.style.color = "#1e2325" //Revert text color back to original
    } else if(button.value == "="){//Check if button.value is '='
      if(numberVerify.test(this.inputString)){//If true use RegExp to check if 'inputString' ends in a number
        this.inputResult = eval(this.inputString); //If above is true evaluate string and store result in 'inputResult'
        this.inputString = this.inputResult; // Then copy 'inputString' to 'inputResult'
        inputField.style.color = "#1e2325"
      }else{
        confirm("Your expression must end with a digit!");//If 'inputString' doesn't end in a number display an alert
    }
    } //After each button action store the values of 'inputString' and 'inputResult' to LocalString
    localStorage.setItem('inputString', this.inputString);
    localStorage.setItem('inputResult', this.inputResult);
  }
}
