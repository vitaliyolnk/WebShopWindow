import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { IResults } from './models/results';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  results$: Observable<IResults>;
  constructor(private productService: ProductService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.results$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
      return this.productService.getProducts(params);
     }));
    }
}
