import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Products } from 'src/app/shared/const/products';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  prodId !: string
  prodObj ! : Iproducts
  productArr: Array<Iproducts> = Products

  constructor(
    private _routes : ActivatedRoute,
    private _router: Router,
    private _productService : ProductsService
  ) { }

  ngOnInit(): void {
    this.prodId= this._routes.snapshot.params['productId'];
    if(this.prodId){
      this.prodObj = this._productService.getSelectedProduct(this.prodId)!
    }
  }

  removeProduct(id:string){
    let getConfirm = confirm('Are sure you want to delete this product?')
    if(getConfirm){
      this._productService.removeProduct(id)
    }
  }

  backToProducts(){
    this._router.navigate(['/products'])
  }
}
