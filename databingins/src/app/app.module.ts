import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o módulo FormsModule
import { CommonModule } from '@angular/common'; // Importe o módulo CommonModule
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StudentRegistryComponent } from './student-registry/student-registry.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentRegistryComponent,
    StudentComponent
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
