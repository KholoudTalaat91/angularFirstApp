import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// module
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { ProductsComponent } from './components/products/products.component';

// services

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
