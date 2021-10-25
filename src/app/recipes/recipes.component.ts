import { Component, OnInit } from '@angular/core';
import { ingredient } from '../Share/share.model'
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  ingredients: ingredient[] = [new ingredient('apple', 5), new ingredient('tomate', 7)];
  constructor() { }

  ngOnInit(): void {

  }

}
