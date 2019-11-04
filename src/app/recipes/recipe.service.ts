import { Injectable, EventEmitter } from '@angular/core';
import {Recipe} from '../recipes/recipes.model'
import { Ingredients } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private slservice:ShoppingListService) { }
  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'http://xawaash.com/wp-content/uploads/2013/01/Fried-Red-Snapper-1-Somali-Food-Blog.jpg',[
      new Ingredients('Meat',1),
      new Ingredients('French Fries', 2)
    ]),
    new Recipe('Another Test Recipe', 'This is simply a test', 'http://xawaash.com/wp-content/uploads/2013/01/Fried-Red-Snapper-1-Somali-Food-Blog.jpg',[
      new Ingredients('Pulse', 4),
      new Ingredients('Rice', 7)
    ])
  ];

  getRecipes() {
    return this.recipes;
  }

  getRecipe(index:number){
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient:Ingredients[]) {
    this.slservice.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index:number, newRecipe:Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  ondeleteRecipe(index:number) {
    this.recipes.slice(index, 1);
    this.recipeChanged.next(this.recipes.slice())
  }

}
