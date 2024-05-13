import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://d1uz88p17r663j.cloudfront.net/original/93a96e6c9de35b2888e18d48d053fe97_Urlai_Roast_Plating.jpg'
    ),
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://d1uz88p17r663j.cloudfront.net/original/93a96e6c9de35b2888e18d48d053fe97_Urlai_Roast_Plating.jpg'
    ),
  ];
  ngOnInit(): void {}
}
