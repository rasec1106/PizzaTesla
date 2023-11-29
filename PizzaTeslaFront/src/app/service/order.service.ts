import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Observable } from 'rxjs';
import { OrderRequest } from '../model/order-request';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }
  private url_base:string = "http://localhost:8080/api/order";

  createOrder(orderRequest : OrderRequest):Observable<any>{
      return this.httpClient.post<Order>(`${this.url_base}/createOrder`,orderRequest)
  }
}
