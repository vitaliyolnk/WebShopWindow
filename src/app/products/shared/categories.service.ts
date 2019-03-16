import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategories } from '../models/results';
import { ParamMap } from '@angular/router';
import { AppSettings } from './app-settings';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesApi = `${AppSettings.API_BASE_URL}/category/read_all.php`;

  constructor(private httpClient: HttpClient) { }

  getCategories(searchParameters: ParamMap): Observable<ICategories> {

    let queryParams = new HttpParams();

    if (searchParameters.keys.length > 0) {
      searchParameters.keys.forEach(fk => {
        const val = searchParameters.getAll(fk);
        if (val) {
          queryParams = queryParams.append(fk, val.toString());
        }
      });
    }
    return this.httpClient.get<ICategories>(this.categoriesApi, { params: queryParams });
  }
}
