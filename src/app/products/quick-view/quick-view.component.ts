import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { IProductPreview } from '../models/product-preview';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css',
  '../shared/shared.styles.css']
})
export class QuickViewComponent {

  productPreview: IProductPreview;
  private errorMessage: string;
  constructor(private productService: ProductService) { }

 getProductPreview(productId: string) {
  this.productService.getProductPreview(productId)
   .subscribe(product => { this.productPreview = product;
    },
    error =>  this.errorMessage = <any>error);
 }
}
