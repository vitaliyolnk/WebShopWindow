import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { IResults, ICategories } from './models/results';
import { ProductService } from './shared/product.service';
import { CategoriesService } from './shared/categories.service';
import { IFilterGroup } from './models/filter-group';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // results$: Observable<[IResults, ICategories]>;
  results$: any;
  categories$: Observable<ICategories>;
  constructor(private productService: ProductService,
    private categoryService: CategoriesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.results$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        return forkJoin(this.productService.getProducts(params),
          this.categoryService.getCategories()).pipe(
            map(([products, categories]) => {
              return { products, categories };
            }
            ));
      }));

    /* this.categories$ = this.route.queryParamMap.pipe(
      switchMap((params: ParamMap) => {
        return this.categoryService.getCategories();
      })); */
  }
}
