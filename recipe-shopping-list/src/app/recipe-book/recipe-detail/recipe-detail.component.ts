import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe-book.model';
import { RecipeBookService } from '../recipe-book.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  id: number;
  recipe: Recipe;
  constructor(private recipebookService: RecipeBookService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // this.recipe = this.recipebookService.getRecipe(+this.route.snapshot.params['id']);
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipebookService.getRecipe(+this.id);
    })
  }

  onAddIngredients() {
    this.recipebookService.sendDataToShoppingList(this.recipe);
  }

  onEditRecipe() {
    // this.router.navigate(['edit'], { relativeTo: this.route })
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

}
