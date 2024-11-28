import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Product } from './act31-model';
import { ProductService } from '../act31-product-service';


@Component({
  selector: 'app-act31-product',
  templateUrl: './act31-product.component.html',
  styleUrl: './act31-product.component.css'
})
export class Act31PRODUCTComponent {
  toys: Product[]=[];
  constructor(private productService:ProductService){

  }
  ngOnInit(): void {
    this.toys = this.productService.getToys();
  }
}
