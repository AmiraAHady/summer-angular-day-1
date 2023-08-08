import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { ProductService } from '../product.service';
import { IProduct } from './IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   allProducts:IProduct[]=[]
   listofpageSize=[5, 10, 25, 100]
   pageSize:number=5
   totalItems:number=0;
   currentpage:number=1;
  constructor(public prodSer:ProductService) { }

  ngOnInit(): void {
    this.prodSer.getAllProducts(this.currentpage,this.pageSize).subscribe({next:(productsData)=>{
      console.log(productsData);
      this.allProducts=productsData.products;
      this.totalItems=productsData.totalProductCount
    }})
  }

  changePage(pageData:PageEvent){
    this.currentpage=pageData.pageIndex+1;
    this.pageSize=pageData.pageSize;
    this.prodSer.getAllProducts(this.currentpage,this.pageSize).subscribe({next:(productsData)=>{
      console.log(productsData);
      this.allProducts=productsData.products;
      this.totalItems=productsData.totalProductCount
      
    }})
  }

}
