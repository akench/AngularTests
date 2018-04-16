import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { sha256 } from 'js-sha256';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

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


    this.http.post('http://127.0.0.1:5000/register', postData).subscribe(data => {
      console.log(data);
      this.router.navigate(['/login']);

    });
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
