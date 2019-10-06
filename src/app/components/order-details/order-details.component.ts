import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
// models
import { User } from "../../models/User";
import { Order } from "../../models/Order";
import { Product } from "../../models/Product";

// services
import { UsersService } from "../../services/users/users.service";
import { OrdersService } from "../../services/orders/orders.service";
import { ProductsService } from "../../services/products/products.service";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"]
})
export class OrderDetailsComponent implements OnInit {
  // Properties
  users: User[];
  orders: Order[];
  Products: Product[];
  user: User;
  order: Order;
  Product: Product;

  // methods
  constructor(
    private usersService: UsersService,
    private ordersService: OrdersService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    forkJoin(
      this.usersService.getUsers(),
      this.ordersService.getOrders(),
      this.productsService.getProducts()
    ).subscribe(([users, orders, Products]) => {
      console.log("users");
      console.log(users);
      console.log("orders");
      console.log(orders);
      console.log("Products");
      console.log(Products);
      
      this.user = users[0];
      this.order = orders[0];
      this.Product = Products[0];

      console.log('this.user');
      console.log(this.user);
      console.log("this.order");
      console.log(this.order);
      console.log("this.Product");
      console.log(this.Product);
      
    });
  }
}