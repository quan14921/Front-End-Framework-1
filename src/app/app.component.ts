import { Component } from '@angular/core';
import mockData from 'src/data';
import { IProduct } from './models/posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  onHandleAdd(product: any) {

  }

  // onhandleAdd(product: any){
  //   console.log('product', product);
  //   this.productList.push(product);
    
  // }
}
