import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

// module
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";
import { ProductsComponent } from "./components/products/products.component";
import { HeaderComponent } from "./components/header/header.component";

// services
import { ProductsService } from "./services/products.service";

@NgModule({
  declarations: [AppComponent, ProductsComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
