import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  login(f){
    console.log(f.value);
    if (f.value.email == 'a@gmail.com' && f.value.password == '12345678') {
      localStorage.setItem('email', f.value.email);
      console.log('login');
    } else {
      console.log('invalid');
    }
  }
}
