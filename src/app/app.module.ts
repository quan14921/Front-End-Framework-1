import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './component/xyz/xyz.component';
import { ProductComponent } from './component/product/product.component';
import { HeaderComponent } from './component/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './component/products/products.component';
import { ProductAddComponent } from './component/product-add/product-add.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ProductComponent,
    HeaderComponent,
    ProductsComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
