import { Component } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simple a test.', 'https://familystylefood.com/wp-content/uploads/2023/01/Creamy-Dijon-chicken-hero-2.jpg'),
    new Recipe('A Test Recipe', 'This is simple a test.', 'https://familystylefood.com/wp-content/uploads/2023/01/Creamy-Dijon-chicken-hero-2.jpg'),
  ];
}
