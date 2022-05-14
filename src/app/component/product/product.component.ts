import { Component, OnInit, Input } from '@angular/core';
import { filter } from 'rxjs';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = 'quan';
  productName: string = "Product A";
  productPrice: number = 10;
  productStatus: boolean = false;
  productInfo: { id: number, price: number, name: string } = {
    id: 1,
    name: "product A",
    price: 200
  };


  ProductList1: {id: number, name: String, price: number, status: boolean}[] =[
    {
      id: 1,
      name: "product A",
      price: 200,
      status: false
    },
    {
      id: 2,
      name: "product 2",
      price: 4000,
      status: true
    },
    {
      id: 3,
      name: "product 3",
      price: 5000,
      status: false
    }

  ]

;

  onHandleClick(){
    console.log('Hello')

    this.productStatus = !this.productStatus
    
  }
  onRemote(id: number){
    console.log(id) 
    this.ProductList1 = this.ProductList1.filter(item => item.id != id)
  }
  onHandleKeypress(event: any){
    console.log(event.target.value);
    this.title = event.target.value;
    

  }
  onSubmit() {
    console.log('1')
  }

  ngOnInit(): void {
  }

}
