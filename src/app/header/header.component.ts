import { Component, OnInit} from '@angular/core';
//decorator
@Component(
  {
    selector: 'app-header',//component directive
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css',]
  }
)
export class HeaderComponent  implements OnInit{
    title:string="Netflix"
    isAvaliable:boolean=true
    inputvalue:string='ali'
    value:boolean=false
  constructor() { 
    console.log('inside header constructor');
    
  }
  ngOnInit(): void {
    console.log("inside header ng on init");
    
  }

  sayhello(){
    alert("welcome to my app");
  }
  printLogo(){
    console.log(this.title);
    
  }
}
