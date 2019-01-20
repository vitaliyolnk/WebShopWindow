import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { IProductPreview } from '../models/product-preview';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css',
  '../shared/shared.styles.css']
})
export class QuickViewComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) { }
  productPreview: IProductPreview;
  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Destroyed Quick view');
  }

  getProductPreview(productId: string) {
    this.productService.getProductPreview(productId).subscribe(product => this.productPreview = product);
  }
}
