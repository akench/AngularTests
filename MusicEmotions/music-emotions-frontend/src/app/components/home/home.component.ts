import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  youtubeUrl: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  postUrl(): void {

    this.http.post('http://127.0.0.1:5000/classify', 
      {'url': this.youtubeUrl}).subscribe(ret => {
        console.log('class = ' + ret);

    });
  }

}
