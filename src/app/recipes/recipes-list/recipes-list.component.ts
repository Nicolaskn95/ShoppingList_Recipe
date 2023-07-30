import { Component } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
  recipes: Recipes[] = [
    new Recipes('a Test Recipe','This is a test','https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg')
  ];
}
