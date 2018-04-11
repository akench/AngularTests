import { Component, OnInit } from '@angular/core';
import { sha256 } from 'js-sha256';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }


  login(): void {

    var hashed = sha256(this.password);
    var result;

    this.http.post('http://127.0.0.1:5000/login',
    {
      'username': this.username,
      'password': hashed
    }).subscribe((data => {
      result = data
      console.log(result);
    }));

    

  }

}
