import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproducts } from 'src/app/shared/models/products';
import { ProductsService } from 'src/app/shared/services/products.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup
  isInEditMode : boolean = false
  productId !:string;
  prodObj !:Iproducts
  constructor(
    private _uuidService : UuidService,
    private _prodService : ProductsService,
    private _routes : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.productFormCreation();
    this.productId = this._routes.snapshot.params['productId']
    if(this.productId){
      this.isInEditMode = true
      this.prodObj = this._prodService.getSelectedProduct(this.productId)!
      this.productForm.patchValue(this.prodObj)
    }else{
      this.isInEditMode = false
    }
  }

  productFormCreation(){
    this.productForm = new FormGroup({
      pname: new FormControl(null, [Validators.required]),
      pdescription: new FormControl(null, [Validators.required]),
      pprice: new FormControl(null, [Validators.required]),
      pimgurl: new FormControl(null, [Validators.required]),
      pstatus: new FormControl(null, [Validators.required])
    })
  }

  onProductAdd(){
    if(this.productForm.valid){
      let newProduct = {...this.productForm.getRawValue(), pid: this._uuidService.uuid()}
      this._prodService.addNewProduct(newProduct)
      console.log(newProduct)
    }
  }

  onUpdate(){
    if(this.productForm.valid){
      let prodUpdateObj = {...this.productForm.value, pid: this.productId}
      this._prodService.updateProduct(prodUpdateObj)
    }
  }

  backToProducts(){
    this._router.navigate(['/products'])
  }
}
