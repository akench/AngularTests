import { Component, OnInit } from '@angular/core';
import { sha256 } from 'js-sha256';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";
  loginFailed: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  login(): void {

    if(this.password === "" || this.username === "") {
      this.loginFailed = true;
      return;
    }

    var hashed = sha256(this.password);

    this.http.post('http://127.0.0.1:5000/login',
    {
      'username': this.username,
      'password': hashed
    }).subscribe((data => {
      console.log(data);
      if(data === 'true') {
        //login successful, redirect to home page
        localStorage.setItem('loggedInUser', this.username);
        this.router.navigate(['/home']);
      }
      else {
        this.loginFailed = true;
      }

    }));

    

  }

}
