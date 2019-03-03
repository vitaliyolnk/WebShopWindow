import { Component, OnInit, Input, Output } from '@angular/core';
import { IProductView } from '../models/product-view';
import { IPagingView } from '../models/paging-view';
import { ImageView } from '../shared/image-view.enum';
import { PreviousRouteService } from '../shared/previous-route.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public ImageView = ImageView;
  constructor(private previousRouteService: PreviousRouteService) { }
  @Input() products: IProductView[];
  @Input() paging: IPagingView;

  ngOnInit() {
  }
}
