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
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './component/signup/signup.component';
import { LayoutsAdminComponent } from './layouts/layouts-admin/layouts-admin.component';
import { LayoutsWedsiteComponent } from './layouts/layouts-wedsite/layouts-wedsite.component';
import { SigninComponent } from './component/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    ProductComponent,
    HeaderComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    SignupComponent,
    LayoutsAdminComponent,
    LayoutsWedsiteComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
