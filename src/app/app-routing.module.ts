import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductDetailComponent } from './component/product-detail/product-detail.component';
import { ProductComponent } from './component/product/product.component';
import { ProductsComponent } from './component/products/products.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { AdminGuard } from './services/guards/admin.guard';


const routes: Routes = [
  
  {path : "product", canActivate: [AdminGuard] , component: ProductComponent},
  {
    path : "products", canActivate: [AdminGuard], children:[
      { path: "", component: ProductsComponent },
      { path: "add", component: ProductAddComponent },
      { path: ":id", component: ProductDetailComponent },
      { path: "edit/:id", component: ProductAddComponent },
    ]
  },
  {path: "signup", component: SignupComponent},
  {path: "signin", component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
