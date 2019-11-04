import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-items',
  templateUrl: './recipes-items.component.html',
  styleUrls: ['./recipes-items.component.css']
})
export class RecipesItemsComponent implements OnInit {
  //@Output() recipeitem = new EventEmitter<void>();
  @Input() recipe:Recipe;
  @Input() index:number;
  //recipe:Recipe;
  //constructor(private recipeservice:RecipeService) { }

  ngOnInit() {
  }

  // onSelected() {
  //   //this.recipeitem.emit();
  //   this.recipeservice.recipeSelected.emit(this.recipe);
  // }

}
