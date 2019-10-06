import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// module
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { HeaderComponent } from "./components/header/header.component";
import { OrdersComponent } from "./components/orders/orders.component";
import { OrderDetailsComponent } from './components/order-details/order-details.component';

// services
import { ProductsService } from "./services/products/products.service";
import { OrdersService } from "./services/orders/orders.service";
import { UsersService } from "./services/users/users.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HeaderComponent,
    OrdersComponent,
    OrderDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsService, OrdersService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
