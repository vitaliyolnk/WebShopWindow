import { Component, OnInit, Input } from '@angular/core';
import { IProductView } from '../models/product-view';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor() { }
  @Input() products: IProductView[];
  ngOnInit() {
  }
}
