import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierComponent } from './suppliers/supplier/supplier.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { EditProductComponent } from './products/edit-product/edit-product.component';
import { ProductsService } from './products/products.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'produtos/:id', component: ProductComponent },
  { path: 'produtos/:id/editar', component: EditProductComponent },
  { path: 'fornecedores', component: SuppliersComponent },
  { path: 'fornecedores/:id/:name', component: SupplierComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuppliersComponent,
    SupplierComponent,
    ProductsComponent,
    ProductComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }