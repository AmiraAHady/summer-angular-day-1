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
  constructor() { }
}
