import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {
  property1=[1,2,3]
  myMovie1={
    name:'spiderman :no way home',
    releaseYear:2022,
    poster:'https://img.youm7.com/ArticleImgs/2021/11/14/320917-%D8%B3%D8%A8%D8%A7%D9%8A%D8%AF%D8%B1%D9%85%D8%A7%D9%86.jfif',
    notValiable:true,
    inStock:true,
  }
  myMovie2={
    name:'toy story 4',
    releaseYear:2019,
    poster:"https://m.media-amazon.com/images/M/MV5BMTYzMDM4NzkxOV5BMl5BanBnXkFtZTgwNzM1Mzg2NzM@._V1_.jpg",
    notValiable:true,
    inStock:false,
  }
  myMovie3={
    name:'aquaman',
    releaseYear:2020,
    poster:"https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_.jpg",
    notValiable:true,
    inStock:true,
  }
  constructor() { }

  ngOnInit(): void {
  }

  

}
