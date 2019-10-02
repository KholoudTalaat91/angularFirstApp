import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
// models
import { Product } from "../models/Product";

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  // Properties
  products: Product[];
  productsUrl: string = "http://jsonstub.com/products";
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      "JsonStub-User-Key": "083ffae4-f6e0-48f7-880e-ba8551e74448",
      "JsonStub-Project-Key": "108c8cf9-875e-44c3-946a-b737d3cad0d1",
      "Access-Control-Allow-Origin": "http://jsonstub.com"
    })
  };

  // methods
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    console.log("getUser");
    return this.http.get<Product[]>(this.productsUrl, this.httpOptions);
  }
}
