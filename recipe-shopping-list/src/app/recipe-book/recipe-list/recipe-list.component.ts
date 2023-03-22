import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe} from '../recipe-book.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(private recipebookService: RecipeBookService) { }

  ngOnInit(): void {
    this.recipes = this.recipebookService.getRecipes();
  }
}
