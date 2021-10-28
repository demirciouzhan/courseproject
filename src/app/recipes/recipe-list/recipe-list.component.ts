import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected=new EventEmitter<Recipe>();
recipes: Recipe[]=  [new Recipe('test recipes','test','https://dcassetcdn.com/design_img/10150/16906/16906_294312_10150_image.jpg'),
new Recipe('Another Recipes','test','https://dcassetcdn.com/design_img/10150/16906/16906_294312_10150_image.jpg')
];

  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe:Recipe){
this.recipeWasSelected.emit(recipe);
  }
}
