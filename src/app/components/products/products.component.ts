import { Component, OnInit } from "@angular/core";

// models
import { Product } from "../../models/Product";

// services
import { ProductsService } from "../../services/products.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  // Properties
  products: Product[];

  // methods
  constructor(private productsServices: ProductsService) {}

  ngOnInit() {
    console.log("ProductsComponent");
    console.log(this.products);
    this.productsServices.getProducts().subscribe(products => {
      console.log(products), (this.products = products);
    });
  }
}
