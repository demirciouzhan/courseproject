import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[]=  [new Recipe('test recipes','test','https://image.freepik.com/free-psd/recipe-notebook-pasta-arrangement_23-2148591861.jpg')
];

  constructor() { }

  ngOnInit(): void {
  }

}
