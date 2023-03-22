import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "../recipe-book/recipe-book.model";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class ShoppingService {
    ingredientsChanged = new EventEmitter<{ recipe: Recipe, ingredients: Ingredient[] }>();
    private recipe: Recipe;

    private ingredients: Ingredient[] = [
        new Ingredient('Test', 1),
        new Ingredient('Test 2', 2),
    ];
    constructor() { }

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(data: Ingredient) {
        this.ingredients.push(data);
        this.ingredientsChanged.emit({ recipe: this.recipe, ingredients: this.ingredients.slice() });
    }

    loadIngredients(recipe: Recipe) {
        // this.recipe = recipe;
        // this.ingredients = recipe.ingredients;
        this.ingredients.push(...recipe.ingredients);
        this.ingredientsChanged.emit({ recipe: this.recipe, ingredients: this.ingredients.slice() });
    }
}