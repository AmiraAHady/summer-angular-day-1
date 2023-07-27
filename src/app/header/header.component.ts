import { Component} from '@angular/core';
//decorator
@Component(
  {
    selector: 'app-header',//component directive
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css',]
  }
)
export class HeaderComponent {
    title:string="Netflix"
    isAvaliable:boolean=true
    inputvalue:string='ali'
    value:boolean=false
  constructor() { }
  sayhello(){
    alert("welcome to my app");
  }
  printLogo(){
    console.log(this.title);
    
  }
}
