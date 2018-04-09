import { Component, OnInit, Input } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  @Input() data: string;

  ngOnInit(private http: Http) {
  }

  onSubmit() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post('http://localhost:3021/api/data', {'data': 3}, options)
      .catch(this.handleError)
      .subscribe(
       (data) => console.log(data)
    );
  }

}
