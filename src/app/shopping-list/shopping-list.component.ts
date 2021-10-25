import { Component, OnInit } from '@angular/core';
import { ingredient } from '../Share/share.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: ingredient[] = [new ingredient('apple',5) ,new ingredient('tomate',7)];
  constructor() { }

  ngOnInit(): void {
  }

}
