import { Injectable } from '@angular/core';
import { Observable, empty, EMPTY } from 'rxjs';
import { IResults } from '../models/results';
import { ParamMap } from '@angular/router';
import { IProduct } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsApi = `${AppSettings.API_BASE_URL}/product/read_paging.php`;
  private productApi = `${AppSettings.API_BASE_URL}/product/read_one.php`;

  constructor(private httpClient: HttpClient) { }

  getProducts(searchParameters: ParamMap): Observable<IResults> {
    let queryParams = new HttpParams();
    if (searchParameters.keys.length > 0) {
      searchParameters.keys.forEach(fk => {
        const val = searchParameters.getAll(fk);
        if (val) {
          queryParams = queryParams.append(fk, val.toString());
        }
      });
    }

    return this.httpClient.get<IResults>(this.productsApi, { params: queryParams });
  }

  getProduct(productId: string): Observable<IProduct> {
    if (productId) {
      const queryParams = new HttpParams()
        .set('id', productId);

      return this.httpClient
        .get<IProduct>(this.productApi,
          { params: queryParams });
    } else {
      return EMPTY;
    }
  }
}
