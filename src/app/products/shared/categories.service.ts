import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFilterGroup } from '../models/filter-group';
import { IResults, ICategories } from '../models/results';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private apiBaseUrl = 'http://localhost/veloactive/api';
  private categoriesApi = `${this.apiBaseUrl}/category/read_all.php`;

  constructor(private httpClient: HttpClient) { }

  getCategories(): Observable<ICategories> {

  //  const res = this.httpClient.get(this.categoriesApi);
  //  res.pipe(map((response: Response) => console.log(response.json())));

    return this.httpClient.get<ICategories>(this.categoriesApi);
  }
}
