import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { product, variant } from "../interface/product";
import { environment } from "../../../environments/environment";

// const httpOptions = {
//   headers: new HttpHeaders({
//     "Content-Type": "application/json"
//   })
// };
@Injectable({
  providedIn: "root"
})
export class ProductService {
  // private apiUrl = "https://ecomm-products.modus.workers.dev";

  constructor(private http: HttpClient) {}

  /**get list of all products
   * @return {*}  {Observable<product[]>}
   * @memberof ProductService
   */
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(`${environment.apiURL}/`);
  }

  /**gets a list of products to display
   * @param {product[]} Products
   * @param {number} limit
   * @return {*} {product[]}
   * @memberof ListComponent
   */
  getDisplayProducts(Products: product[], limit: number): product[] {
    var displayProducts = [];
    for (var product in Products) {
      if (
        displayProducts.length < limit &&
        this.isAvailable(Products[product].variants)
      )
        displayProducts.push(Products[product]);
      if (displayProducts.length === limit) break;
    }
    return displayProducts;
  }
  /**check if product is available
   * @param {variant[]} variants
   * @return {*}  {boolean}
   * @memberof ListComponent
   */
  isAvailable(variants: variant[]): boolean {
    var res = false;
    for (var variant in variants) {
      if (variants[variant].quantity > 0) res = true;
    }
    return res;
  }
}
