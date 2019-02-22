import { Component, OnInit, Input, Output } from '@angular/core';
import { IProductView } from '../models/product-view';
import { IPagingView } from '../models/paging-view';
import { ImageView } from '../shared/image-view.enum';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public ImageView = ImageView;
  constructor() { }
  @Input() products: IProductView[];
  @Input() paging: IPagingView;

  ngOnInit() {
  }
}
