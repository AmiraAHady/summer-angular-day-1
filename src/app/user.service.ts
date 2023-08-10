import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpCredentials } from './signupcreds';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:3000';
  constructor(public http: HttpClient) {}

  signUpUser(userEmail:string,userPassword:string,userName:string):Observable<any>{
     let userData:SignUpCredentials={userName:userName,email:userEmail,password:userPassword}
    return this.http.post(`${this.baseUrl}/user/addUser`,userData)
  }
}
