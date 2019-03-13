import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { ProductService } from './shared/product.service';
import { CategoriesService } from './shared/categories.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  error: any;
  results$: Observable<any> = null;

  constructor(private productService: ProductService,
    private categoryService: CategoriesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.results$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        return forkJoin(
          this.productService.getProducts(params),
          this.categoryService.getCategories())
          .pipe(
            map(([productResult, categoryResult]) => {
              return { productResult, categoryResult };
            }));
      }));
  }
}
