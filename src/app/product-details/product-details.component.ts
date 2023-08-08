import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from '../product-list/IProduct';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  selectedProduct!: IProduct;

  constructor(private prodSer:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id= parseInt(this.route.snapshot.paramMap.get('id')!);
    this.prodSer.getProductById(id).subscribe({
      next:(singleProduct)=>{
        console.log(singleProduct);
        this.selectedProduct=singleProduct;
      }
    })
    
  }

}
