import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../models/product';

@Component({
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
