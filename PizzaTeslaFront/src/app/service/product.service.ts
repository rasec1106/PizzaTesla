import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  url_base: string = "http://localhost:8080/api/product";

  getProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(`${this.url_base}/getProducts`)
  }

  // getProductsPaginacion(page : number, size : number): Observable<any> {
  //   return this.httpClient.get<any>(`${this.url_base}/getProducts/page/${page}/size/${size}`)
  // }

  getProductById(id : number): Observable<any> {
    return this.httpClient.get<any>(`${this.url_base}/${id}`)
  }

  createProduct(product : any): Observable<any> {
    return this.httpClient.post<any>(`${this.url_base}/createProduct`,product)
  }

  updateProduct(product : any): Observable<any> {
    return this.httpClient.put<any>(`${this.url_base}/updateProduct`, product)
  }
  deleteProduct(id: any) {
    return this.httpClient.delete<any>(`${this.url_base}/deleteProduct/${id}`)
  }
  getProductByCategory(categoryId : any): Observable<any> {
    return this.httpClient.get<any>(`${this.url_base}/getByCategory/${categoryId}`)
  }
}
