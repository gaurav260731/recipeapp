import { Component, OnInit, Input, Injectable } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
 // @Input() recipe:Recipe;
  recipe:Recipe;
  id:number;
  constructor(private recipeservice:RecipeService, private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeservice.getRecipe(this.id);
      }
    );
  }

  onAddShoppinglist() {
    this.recipeservice.addIngredientToShoppingList(this.recipe.ingredient);
  }

  onEditRecipe() {
    this.router.navigate(['edit'],{relativeTo:this.route})
  }

  onDeleteRecipe() {
    this.recipeservice.ondeleteRecipe(this.id);
    this.router.navigate(['/recipes'])
  }

}
