import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  @Input() username: string;
  @Input() password: string;
  @Input() confirmedPassword: string;

  ngOnInit() {
  }

  // onSubmit() {
  //   this.http.post('http://127.0.0.1:5000/register', {
  //     'data': this.data
  //   }).subscribe(data => console.log(data))

  // }

}
