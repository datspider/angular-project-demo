import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('recipe 1', 'Simply Simply Simply Simply Simply Simply', 'https://img.icons8.com/material/4ac144/256/twitter.png'),
    new Recipe('recipe 1', 'Simply Simply Simply Simply Simply Simply', 'https://img.icons8.com/material/4ac144/256/twitter.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
