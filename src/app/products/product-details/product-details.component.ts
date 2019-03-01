import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product';
import { ProductSpec } from '../shared/product-spec.enum';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css',
    '../shared/shared.styles.css']
})
export class ProductDetailsComponent implements OnInit {
  public ProductSpec = ProductSpec;
  public productColour: string;
  public productImage: string;
  public productDetails: IProduct;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productDetails = this.route.snapshot.data['productDetails'];
    this.productColour = this.productDetails.colour;
    this.productImage = this.productDetails.image_url;
  }

  UpdateImage(colour: string) {
    this.productColour = colour;
    if (this.productDetails.relatedProducts) {
      const colourMatchingProduct = this.productDetails.relatedProducts
        .find(rp => rp.colour === colour);
        this.productImage = colourMatchingProduct
        ? colourMatchingProduct.image_url
        : this.productDetails.image_url;
    }
  }
}
