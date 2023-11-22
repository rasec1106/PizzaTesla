import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }
  url_base:string = "http://localhost:8080/api/category";

  getCategories():Observable<Category[]>{
      return this.httpClient.get<Category[]>(`${this.url_base}/getCategories`)
  }
}
