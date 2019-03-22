import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product';
import { ProductSpec } from '../shared/product-spec.enum';
import { PreviousRouteService } from '../shared/previous-route.service';
import { Title } from '@angular/platform-browser';
import { AppSettings } from '../shared/app-settings';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css',
    '../shared/shared.styles.css']
})
export class ProductDetailsComponent implements OnInit {

  public ProductSpec = ProductSpec;
  public productListUrl: string;
  public productColour: string;
  public productImage: string;
  public productDetails: IProduct;

  constructor(private route: ActivatedRoute,
    private previousRouteService: PreviousRouteService,
    private titleService: Title) {
  }

  ngOnInit() {
    this.productDetails = this.route.snapshot.data['productDetails'];
    this.productColour = this.productDetails.colour;
    this.productImage = this.productDetails.image_url;
    this.productListUrl = this.getProductListUrl();
    this.titleService.setTitle(`${AppSettings.WEBSITE_NAME} | Bikes | ${this.productDetails.brand} ${this.productDetails.model}`);
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

  private getProductListUrl() {
    this.productListUrl = this.previousRouteService.getPreviousUrl();
    return this.productListUrl ? this.productListUrl : '/products';
  }
}
