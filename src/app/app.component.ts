import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Calculator // Sample Project';
  names: any = {"Name": "Adam",
"Status": true};
constructor(){

}
ngOnInit(){
document.getElementById("input1").setAttribute("disabled","disabled")

}
  showArray(){
    
  }
  call(){
    console.log('Hello world!');
    console.log(document.getElementById("input1"));
    this.names.Status = false;
  }

  
}
