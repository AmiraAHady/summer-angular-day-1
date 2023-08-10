import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private userServ: UserService) {}

  ngOnInit(): void {}
  onSignUp(formData: NgForm) {
    if (formData.invalid) {
      return;
    }
    this.userServ
      .signUpUser(
        formData.value.userEmail,
        formData.value.userPassword,
        formData.value.userName
      )
      .subscribe({
        next: (data) => {
          console.log(data);
        },
      });
  }
}
