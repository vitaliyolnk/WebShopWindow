import { Injectable } from '@angular/core';
import { Observable, of, empty } from 'rxjs';
import { IResults } from '../models/results';
import { ParamMap } from '@angular/router';
import { IProductPreview } from '../models/product-preview';
import { IProduct } from '../models/product';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiBaseUrl = 'http://localhost/veloactive/api';
  private productsApi = `${this.apiBaseUrl}/product/read_paging.php`;
  private productApi = `${this.apiBaseUrl}/product/read_one.php`;
  private productPreviewApi = `${this.apiBaseUrl}/product/read_one_preview.php`;

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

  getProductPreview(productId: string): Observable<IProductPreview> {
    if (productId) {
      const queryParams = new HttpParams()
        .set('id', productId);
      return this.httpClient
      .get<IProductPreview>(this.productPreviewApi,
                { params: queryParams });
    } else {
      return empty();
    }
  }

  getProduct(productId: string): Observable<IProduct> {
    if (productId) {
      const queryParams = new HttpParams()
        .set('id', productId);
      return this.httpClient
      .get<IProduct>(this.productApi,
                { params: queryParams });
    } else {
      return empty();
    }
  }


  // not used
  /*  getSearchResuts(filters?: IFilterGroup[]): Observable<IResults> {
     if (filters) {
       const tempSearchResults = { ...SEARCH_RESULTS };
       const selectedGroups = filters.filter(fl => fl.items.find(f => f.isSelected));
       selectedGroups.forEach(sf => {
         switch (sf.group) {
           case 'Brand': {
             const brandFilters = sf.items.filter(f => f.isSelected);
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
  */
  /** Sets the value of filters' isSelected property to 'true'
   * based on the matching search parameter value

  private updateFilters(searchResultsFilters: IFilterGroup[], selectedFilters?: ParamMap) {
    searchResultsFilters.forEach(fg => {
      const selectedFilter = selectedFilters.getAll(fg.group);
      fg.items.forEach(fgf => {
        if (selectedFilter.find(gfl => gfl === fgf.id)) {
          fgf.isSelected = true;
        }
      });
    });
  }
  */
}
