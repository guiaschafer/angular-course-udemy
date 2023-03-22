import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInput: ElementRef;
  
  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    this.shoppingService.addIngredient(
      new Ingredient(this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value)
    );
  }

}
