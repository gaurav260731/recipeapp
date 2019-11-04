import { Component, OnInit } from '@angular/core';
import {Ingredients} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredient:Ingredients[] ;
  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit() {
    this.ingredient = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientChanged.subscribe(
      (ingredient:Ingredients[]) => {
        this.ingredient = ingredient;
      }
    )
  }

  onIngredientAdded(ingredients:Ingredients) {
    this.ingredient.push(ingredients);

  }

  onEditList(index: number) {
    this.shoppinglistService.startEditing.next(index);
  }

}
