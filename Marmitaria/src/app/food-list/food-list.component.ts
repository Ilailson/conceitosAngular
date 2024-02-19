import { Component } from '@angular/core';
import { Food } from '../shared/food.model';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent {
  foodList: Food [] = [
    new Food('Bife',19),
    new Food('Fraudinha',10),
    new Food('Arroz',25)
  ];

}
