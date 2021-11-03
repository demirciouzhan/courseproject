import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Share/share.model'
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  ingredients: Ingredient[] = [new Ingredient('apple', 5), new Ingredient('tomate', 7)];
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) =>{
        this.selectedRecipe=recipe;
      }
    );
  }

}
