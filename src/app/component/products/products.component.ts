import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/models/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input('data') ProductList!: IProduct[];

  productDeail!: IProduct;

  constructor() { }

  ngOnInit(): void {
  }


  onShow(id: number){
    this.productDeail = this.ProductList.find(item => item.id === id)!;
    console.log(this.productDeail);
    
  }

}
