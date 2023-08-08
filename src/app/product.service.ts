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
      `${this.baseUrl}/products?page=${page}&pageSize=${pageSize}`
    );
  }

  getProductById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/products/${productId}`);
  }
}
