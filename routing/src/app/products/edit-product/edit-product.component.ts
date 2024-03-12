import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product?: {id: number, name: string, status: string};
  productName = '';
  productStatus = '';

  constructor() { }

  ngOnInit(): void {
  }

}
