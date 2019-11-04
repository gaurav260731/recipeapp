import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm} from '@angular/forms'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slService: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemIndex:number;
  editItem:Ingredients;
  // @ViewChild('nameInput') nameInputRef:ElementRef;
  // @ViewChild('amountInput') amountInputRef:ElementRef;
  // @ViewChild('f') submitForm:FormData;
  //@Output() ingredientAdded = new EventEmitter<Ingredients>();

  constructor(private shoppinglistService:ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.shoppinglistService.startEditing.subscribe(
      (index:number)=>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppinglistService.getIngredient(index);
        this.slService.setValue({
          name: this.editItem.name,
          amount:this.editItem.amount
        })
      }
    );
  }

  onSubmit(form:NgForm) {
    // const ingName = this.nameInputRef.nativeElement.value;
    // const ingAmount = this.nameInputRef.nativeElement.value;
    const value = form.value;
    const ingredient = new Ingredients(value.name, value.amount);
    if(this.editMode) {
      this.shoppinglistService.updateIngredient(this.editItemIndex, ingredient)
    }else {
      this.shoppinglistService.addIngredient(ingredient);
    }
    this.editMode = false;
    form.reset();
    //this.ingredientAdded.emit(ingredient);
    //this.shoppinglistService.addIngredient(ingredient);
    
  }

  clearField(form:NgForm) {
    this.editMode = false;
    form.reset();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  delete() {
    this.shoppinglistService.deleteIngredient(this.editItemIndex)
    this.editMode = false;
    this.slService.reset();
  }


}
