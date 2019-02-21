import { Component } from '@angular/core';
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
  loading: boolean;

  getProductPreview(productId: string) {
    this.loading = true;
    this.productService.getProductPreview(productId)
      .subscribe(product => {
        this.productPreview = product;
      },
        error => this.errorMessage = <any>error,
        () => this.loading = false);
  }
}
