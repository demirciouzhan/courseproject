import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Share/share.model'
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  ingredients: Ingredient[] = [new Ingredient('apple', 5), new Ingredient('tomate', 7)];
  constructor() { }

  ngOnInit(): void {

  }

}
