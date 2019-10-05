import { Component, OnInit } from "@angular/core";

// models
import { Order } from "../../models/Order";

// services
import { OrdersService } from "../../services/orders/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"]
})
export class OrdersComponent implements OnInit {
  // Properties
  orders: Order[];

  // methods
  constructor(private ordersService: OrdersService) {}

  ngOnInit() {
    console.log("OrdersComponent");
    console.log(this.orders);
    this.ordersService.getOrders().subscribe(orders => {
      console.log(orders), (this.orders = orders);
    });
  }
  test(start, index){
  return start + index

  }
}
