import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";
import { ActivatedRoute } from "@angular/router";

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
  id: string;
  // methods
  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService,
    private ordersService: OrdersService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("id");
    console.log(id);
    
    forkJoin(
      this.usersService.getUsers(),
      this.ordersService.getOrders()
    ).subscribe(([users, orders]) => {
      console.log("users");
      console.log(users);
      console.log("orders");
      console.log(orders);

      let userIndex  = users.findIndex(e => e.Id==id);
      let OrderIndex = orders.findIndex(e => e.UserId==id);
      this.order = orders[OrderIndex];
      this.user = users[userIndex];
      
      console.log("this.user");
      console.log(this.user);
      console.log("this.order");
      console.log(this.order);
    });
  }
}
