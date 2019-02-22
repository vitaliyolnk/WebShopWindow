import { Component } from '@angular/core';
import { IProductView } from '../models/product-view';
import { ImageView } from '../shared/image-view.enum';

@Component({
  selector: 'app-quick-view',
  templateUrl: './quick-view.component.html',
  styleUrls: ['./quick-view.component.css',
    '../shared/shared.styles.css']
})
export class QuickViewComponent {
  public ImageView = ImageView;
  productView: IProductView;
}
