import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../models/categories';

const URL_BASE = 'http://127.0.0.1:3000'

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Array<Categories>> {
    return this.http.get(`${URL_BASE}/categories`) as Observable<Array<Categories>>
  }

  public getCategoryById(id: number): Observable<Categories> {
    return this.http.get(`${URL_BASE}/categories/${id}`) as Observable<Categories>
  }

  public postCategory(category: Categories): Observable<string> {
    return this.http.post(`${URL_BASE}/categories`, category) as Observable<string>
  }

  public deleteCategory(id: number): Observable<Categories> {
    return this.http.delete(`${URL_BASE}/categories/${id}`) as Observable<Categories>
  }

  public editCategory(id: number, category: Categories): Observable<Categories> {
    return this.http.put(`${URL_BASE}/categories/${id}`, category) as Observable<Categories>
  }
}
