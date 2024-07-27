import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproducts } from '../../models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products !: Array<Iproducts>
  constructor(
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.products = this._productService.fetchAllProducts()
  }

}
