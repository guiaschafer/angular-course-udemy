import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe-book.model';
import { RecipeBookService } from '../../recipe-book.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeBookService: RecipeBookService) { }

  ngOnInit(): void {
  }

  onSelectRecipe(event: any) {
    this.recipeBookService.recipeSelected.emit(this.recipe);
  }

}
