import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserComponent } from './user/user.component';
import { LogginService } from './logging.service';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    NewUserComponent,
    UserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LogginService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
