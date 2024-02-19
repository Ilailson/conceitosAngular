import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PackagesComponent } from './packages/packages.component';
import { PackageListsComponent } from './packages/package-lists/package-lists.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { PackageItemComponent } from './packages/package-lists/package-item/package-item.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodEditComponent } from './food-list/food-edit/food-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PackagesComponent,
    PackageListsComponent,
    PackageDetailsComponent,
    PackageItemComponent,
    FoodListComponent,
    FoodEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
