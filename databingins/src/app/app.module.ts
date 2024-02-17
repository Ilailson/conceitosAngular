import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o módulo FormsModule
import { CommonModule } from '@angular/common'; // Importe o módulo CommonModule
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Adicione o módulo FormsModule aos imports
    CommonModule // Adicione o módulo CommonModule aos imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
