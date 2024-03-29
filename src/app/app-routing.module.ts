import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesItemsComponent } from './recipes/recipes-list/recipes-items/recipes-items.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailsComponent } from './recipes/recipes-details/recipes-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path:'', redirectTo:'/recipes', pathMatch:'full' },
  { path:'recipes', component: RecipesComponent, children:[
    { path:'', component: RecipeStartComponent},
    { path:'new', component:RecipeEditComponent},
    { path:':id', component: RecipesDetailsComponent},
    { path:':id/edit', component:RecipeEditComponent}
  ] },
  { path:'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
