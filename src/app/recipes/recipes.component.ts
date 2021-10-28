import { Component, OnInit } from '@angular/core';
import { ingredient } from '../Share/share.model'
import { Recipe } from './recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  ingredients: ingredient[] = [new ingredient('apple', 5), new ingredient('tomate', 7)];
  constructor() { }

  ngOnInit(): void {

  }

}
