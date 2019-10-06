import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
// models
import { User } from "../../models/User";
import { Order } from "../../models/Order";

// services
import { UsersService } from "../../services/users/users.service";
import { OrdersService } from "../../services/orders/orders.service";

@Component({
  selector: "app-order-details",
  templateUrl: "./order-details.component.html",
  styleUrls: ["./order-details.component.scss"]
})
export class OrderDetailsComponent implements OnInit {
  // Properties
  users: User[];
  orders: Order[];
  user: User;
  order: Order;

  // methods
  constructor(
    private usersService: UsersService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    forkJoin(
      this.usersService.getUsers(),
      this.ordersService.getOrders()
    ).subscribe(([users, orders]) => {
      console.log("users");
      console.log(users);
      console.log("orders");
      console.log(orders);

      this.user = users[0];
      this.order = orders[0];
      console.log('this.user');
      console.log(this.user);
      console.log("this.order");
      console.log(this.order);
    });
  }
}
