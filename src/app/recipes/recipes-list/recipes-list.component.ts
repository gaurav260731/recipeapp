import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from '../recipes.model'
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  //@Output() recipeWasselected = new EventEmitter<Recipe>();
  constructor(private recipeservice: RecipeService, private route:Router, private router:ActivatedRoute) { }
  recipes: Recipe[];
  ngOnInit() {
    this.recipeservice.recipeChanged.subscribe(
      (recipe: Recipe[])=> {
        this.recipes = recipe;
      }
      
    )
    this.recipes = this.recipeservice.getRecipes()
  }

  // recipes: Recipe[] = [
  //   new Recipe('A Test Recipe', 'This is simply a test', 'https'),
  //   new Recipe('Another Test Recipe', 'This is simply a test', 'https')
  // ];

  // onRecipeselected(recipes:Recipe) {
  //   this.recipeWasselected.emit(recipes)
  // }

  onNewRecipe() {
    this.route.navigate(['new'], {relativeTo:this.router})
  }

}
