import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product?: { id: number, name: string, status: string };

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    // const id = +this.route.snapshot.params['id'] //+ ...Converter numero.

    // this.product = this.productsService.getProduct(id);

    // reagindo mudança
    this.route.params.subscribe(
      (params) => {
        this.product = this.productsService.getProduct(+params['id']);
      }
    );

  }

}
