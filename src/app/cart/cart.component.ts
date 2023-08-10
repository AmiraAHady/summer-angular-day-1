import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[]=[];
  isDataCome:boolean=false;
  constructor(private prodServ: ProductService,private router:Router) {}

  ngOnInit(): void {
    this.isDataCome=false
    this.prodServ.getCart().subscribe({
      next: (items) => {
        console.log(items.cartItems);
        this.cartItems = items.cartItems;
        this.isDataCome=true;
      },
    });
  }

  addOrder() {
    this.prodServ.addTOOrder(this.cartItems).subscribe({
      next: (data) => {
        console.log(data);
      },
    });
   this.router.navigate(['/orders'])
  }

  goToshop(){
    this.router.navigate(['/products'])
  }
}
