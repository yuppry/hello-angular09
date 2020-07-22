import { Injectable } from "@angular/core";
import { Product } from "./models/product";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllProoduct(): Observable<Product[]> {
    return this.http.get<Product[]>("https://165.22.255.58:3000/products");
  }
}
