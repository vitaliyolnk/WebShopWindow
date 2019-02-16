import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IFilterGroup } from '../models/filter-group';
import { IResults } from '../models/results';
import { SEARCH_RESULTS } from '../models/mock-results';
import { ParamMap } from '@angular/router';
import { PRODUCT_PREVIEW } from '../models/mock-product-preview';
import { IProductPreview } from '../models/product-preview';
import { IProduct } from '../models/product';
import { PRODUCT } from '../models/mock-product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiBaseUrl = 'http://localhost/veloactive/api';
  private productsApi = `${this.apiBaseUrl}/product/read_paging.php`;
  private options: HttpParams;
  constructor(private httpClient: HttpClient) { }

  getProducts(searchParameters: ParamMap): Observable<IResults> {

    if (searchParameters.keys.length > 0) {

     let queryParams: HttpParams = new HttpParams();
     searchParameters.keys.forEach(fk => {
          const val = searchParameters.get(fk);
          if (val) {
          queryParams = queryParams.append(fk, val);
          }
      });
      this.options = queryParams;
    }

   return this.httpClient.get<IResults>(this.productsApi, {params: this.options});
  }

  getProductPreview(productId: string): Observable<IProductPreview> {
    return of(PRODUCT_PREVIEW);
  }

  getProduct(modelId: string): Observable<IProduct> {
    return of(PRODUCT);
  }


  // not used
  getSearchResuts(filters?: IFilterGroup[]): Observable<IResults> {
    if (filters) {
      const tempSearchResults = { ...SEARCH_RESULTS };
      const selectedGroups = filters.filter(fl => fl.filters.find(f => f.isSelected));
      selectedGroups.forEach(sf => {
        switch (sf.groupName) {
          case 'Brand': {
            const brandFilters = sf.filters.filter(f => f.isSelected);
            brandFilters.forEach(bf => {
              tempSearchResults.products = SEARCH_RESULTS.products.filter(pr => pr.brand === bf.name);
            }
            );
            break;
          }
        }
      }
      );
      return of(tempSearchResults);
    } else {
      return of(SEARCH_RESULTS);
    }
  }

  /** Sets the value of filters' isSelected property to 'true'
   * based on the matching search parameter value
  */
  private updateFilters(searchResultsFilters: IFilterGroup[], selectedFilters?: ParamMap) {
    searchResultsFilters.forEach(fg => {
      const selectedFilter = selectedFilters.getAll(fg.groupName);
      fg.filters.forEach(fgf => {
        if (selectedFilter.find(gfl => gfl === fgf.id)) {
          fgf.isSelected = true;
        }
      });
    });
  }
}
