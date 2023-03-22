import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe-book.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipebookService: RecipeBookService) { }

  ngOnInit(): void {
  }

  onAddIngredients() {
    this.recipebookService.sendDataToShoppingList(this.recipe);
  }
}
