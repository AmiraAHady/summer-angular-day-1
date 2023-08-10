import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './product-list/IProduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) {}

  getAllProducts(
    page: number,
    pageSize: number
  ): Observable<{ products: IProduct[]; totalProductCount: number }> {
    return this.http.get<{ products: IProduct[]; totalProductCount: number }>(
      `${this.baseUrl}/product/getproducts?page=${page}&pageSize=${pageSize}`
    );
  }

  getProductById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/product/getById/${productId}`);
  }

  addtoCart(item: IProduct): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/addtocart`, { productId: item._id });
  }

  getCart():Observable<any>{
     return this.http.get(`${this.baseUrl}/user/getCart`)
  }

  addTOOrder(items:any[]):Observable<any>{
     return this.http.post(`${this.baseUrl}/user/addOrder`,{cartItems:items});
  }
  getOrders():Observable<any>{
     return this.http.get(`${this.baseUrl}/user/getOrders`);
  }
}
