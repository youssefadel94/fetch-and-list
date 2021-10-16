import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { product } from "../interface/product";
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

  /**
   *
   *
   * @return {*}  {Observable<product[]>}
   * @memberof ProductService
   */
  getProducts(): Observable<product[]> {
    return this.http.get<product[]>(`${environment.apiURL}/`);
  }
}
