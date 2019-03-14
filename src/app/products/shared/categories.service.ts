import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategories } from '../models/results';
import { ParamMap } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiBaseUrl = 'http://localhost/veloactive/api';
  private categoriesApi = `${this.apiBaseUrl}/category/read_all.php`;

  constructor(private httpClient: HttpClient) { }

  getCategories(searchParameters: ParamMap): Observable<ICategories> {

  //  const res = this.httpClient.get(this.categoriesApi);
  //  res.pipe(map((response: Response) => console.log(response.json())));
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
