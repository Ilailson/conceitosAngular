import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  product?: {id: number, name: string, status: string};
  productName? = '';
  productStatus? = '';

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // console.log(this.route.snapshot.queryParams)
    // console.log(this.route.snapshot.fragment)

    this.route.queryParams.subscribe();
    this.route.fragment.subscribe();

    this.product = this.productsService.getProduct(1);
    this.productName = this.product?.name;
    this.productStatus = this.product?.status;
  }

  onUpdateProduct(){
    this.productsService.updateProduct(this.product?.id, 
    {
      name:this.productName as string, 
      status: this.productStatus as string,
    });
  }

}
