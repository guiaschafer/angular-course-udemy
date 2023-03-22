import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Recipe } from "./recipe-book.model";

@Injectable()
export class RecipeBookService {
    recipeSelected = new EventEmitter<Recipe>();
    recipes: Recipe[] = [
        new Recipe(
            'Big Tasty',
            'MC Donald Big tasty single',
            'https://images.openfoodfacts.org/images/products/200/000/002/5785/front_fr.23.full.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Cheese', 2)
            ]),
        new Recipe(
            'Royal bacon',
            'MC Donald Royal Baocn',
            'https://manjaremcasa.pt/wp-content/uploads/2020/04/royal-bacon.png',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Cheese', 2),
                new Ingredient('Bacon', 2)
            ])
    ];

    constructor(private shoppingService: ShoppingService) {
        shoppingService.ingredientsChanged.subscribe(
            (data) => { this.recipes.find(r => r.name === data.recipe.name).ingredients = data.ingredients; }
        )
    }

    getRecipes() {
        return this.recipes.slice();
    }

    sendDataToShoppingList(recipe: Recipe) {
        this.shoppingService.loadIngredients(recipe);
    }
}