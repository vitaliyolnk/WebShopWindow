import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product';
import { PRODUCT } from '../models/mock-product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css',
  '../shared/shared.styles.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetails: IProduct;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productDetails = this.route.snapshot.data['productDetails'];
  }
}
