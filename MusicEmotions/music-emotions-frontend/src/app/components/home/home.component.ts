import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SongsViewerComponent } from '../songs-viewer/songs-viewer.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  @ViewChild(SongsViewerComponent) songsViewer: SongsViewerComponent;

  youtubeUrl: string;

  manyYoutubeUrls: string;

  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
  }

  postUrl(url: string): void {

    this.spinnerService.show();

    this.http.post('http://127.0.0.1:5000/classify', {
        'username': localStorage.getItem('loggedInUser'), 
        'url': url
      }).subscribe(ret => {
        console.log('class = ' + ret);
        this.spinnerService.hide();

        this.songsViewer.populateSavedSongs();
    });

    this.youtubeUrl = '';
  }


  postAllUrls(): void {

    var urlsArr: any = this.manyYoutubeUrls.split('\n');

    for(let url of urlsArr) {
      this.postUrl(url);
    }

    this,this.manyYoutubeUrls = '';
  }
  

}
