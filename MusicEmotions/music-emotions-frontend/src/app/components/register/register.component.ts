import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { sha256 } from 'js-sha256';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() username: string;
  @Input() password: string;
  @Input() confirmPassword: string;
  @Input() passwordsMatch: boolean = true;

  ngOnInit() {
  }


  onSubmit(): void {
    var hashed = sha256(this.password);

    var postData = {
      'username': this.username,
      'password': hashed
    };

    console.log(postData);

    this.http.post('http://127.0.0.1:5000/register', postData).subscribe(data => console.log(data));
  }

  onChange(): void {

    if(this.password === undefined || this.confirmPassword === undefined) {
      this.passwordsMatch = true;
    } 
    else if(this.password === this.confirmPassword) {
      this.passwordsMatch = true; 
    }
    else {
      this.passwordsMatch = false;
    }
  }

}
