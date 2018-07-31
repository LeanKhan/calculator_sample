import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CalculatorOutputComponent } from './calculator-output/calculator-output.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorOutputComponent,
    CalculatorInputComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
