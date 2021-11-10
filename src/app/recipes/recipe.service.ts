import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../Share/share.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
  recipeSelected = new Subject<Recipe>();
  
  recipes: Recipe[]=  [new Recipe('çiğ köfte',
  'Lezzetin göbeği',
  'https://i0.wp.com/turkpidya.com/wp-content/uploads/2021/08/Cigkofte-1.jpg?fit=850%2C480&ssl=1',
  [
    new Ingredient('Turşu',1),
    new Ingredient('Domates',20),
  ]),
  new Recipe('Turkish Doner',
  'Yummy',
  'https://cdn.getiryemek.com/restaurants/1604067657962_1125x522.jpeg',
  [
    new Ingredient('patates',2),
    new Ingredient('meat',1)
  ])
];

constructor(private slService:ShoppingListService){}
getRecipes(){
  return this.recipes.slice();
}

getRecipe(index: number){
  return this.recipes[index];
}
addingredientsToShoppingList(ingredients: Ingredient[]){
  this.slService.addIngredients(ingredients);
}
}