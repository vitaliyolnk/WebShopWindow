import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { IProduct } from '../models/product';
import { ProductService } from './product.service';

@Injectable()
export class ProductDetailsResolver implements Resolve<IProduct> {

    constructor(private productService: ProductService,
        private router: Router) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<IProduct> {

        const productId = route.params.id;

       return this.productService.getProduct(productId)
       .pipe(map((product) => {
        if (product) {
            return product;
         }
            return null; }));
    }
}
