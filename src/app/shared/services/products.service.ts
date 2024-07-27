import { Injectable } from '@angular/core';
import { Iproducts } from '../models/products';
import { Products } from '../const/products';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr: Array<Iproducts> = Products
  constructor(
    private _router: Router,
    private _snackbar: SnackbarService
  ) { }

  fetchAllProducts(){
    return this.productsArr
  }

  getSelectedProduct(id:string){
    return this.productsArr.find(prod => prod.pid === id)
  }

  addNewProduct(prod:Iproducts){
    this.productsArr.push(prod)
    this._snackbar.openSnackBar(`Product ${prod.pname} added successfully !!!`)
    this._router.navigate(['/products'])
  }

  updateProduct(updatedObj:Iproducts){
    let getIndex = this.productsArr.findIndex(prod => prod.pid === updatedObj.pid)
    this.productsArr[getIndex] = updatedObj;
    this._snackbar.openSnackBar(`Product ${updatedObj.pname} updated successfully !!!`)
    this._router.navigate(['/products'])
  }

  removeProduct(id:string){
    let getIndex = this.productsArr.findIndex(prod => prod.pid === id);
    this.productsArr.splice(getIndex,1);
    this._snackbar.openSnackBar(`Product deleted successfully !!!`)
    this._router.navigate(['/products'])
  }
}
