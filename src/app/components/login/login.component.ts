import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // loginForm = new FormGroup({
  //   email: new FormControl(null,[Validators.required, Validators.email]),
  //   password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(8)])
  // }
  // )

  // constructor(private authService: AuthService) {

  // }

  login(loginForm : NgForm){
    console.log("salam");
    this.router.navigate(['/dash']);
  }
}
