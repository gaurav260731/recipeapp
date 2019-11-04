import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredient.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredients[]>();
  startEditing = new Subject<number>();
  private ingredient:Ingredients[] = [
    new Ingredients('Apple', 20)
  ];

  getIngredients() {
    return this.ingredient.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredient.push(ingredient);
    this.ingredientChanged.emit(this.ingredient.slice())
  }

  getIngredient(index:number){
    return this.ingredient[index]
  }

  addIngredients(ingredients:Ingredients[]) {
    // for(let ingredient of ingredients) {
    //   this.addIngredient(ingredient);
    // }
    this.ingredient.push(...ingredients);
    this.ingredientChanged.emit(this.ingredient.slice())
  }

  updateIngredient(index: number, newingredient: Ingredients){
    this.ingredient[index] = newingredient;
    this.ingredientChanged.emit(this.ingredient.slice())
  }

  deleteIngredient(index:number) {
    this.ingredient.splice(index, 1);
    this.ingredientChanged.emit(this.ingredient.slice())
  }
}
