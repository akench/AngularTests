import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClient } from '@angular/common/http';
import { EmbedVideoService } from 'ngx-embed-video';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-songs-viewer',
  templateUrl: './songs-viewer.component.html',
  styleUrls: ['./songs-viewer.component.css']
})
export class SongsViewerComponent implements OnInit {
  objectKeys = Object.keys
  urlsPerEmot: any = {'happy': [], 'sad': [], 'angry': [], 'motivational': [], 'relaxing': []}
  songsLoaded: boolean = false;


  testUrl: string = 'https://www.youtube.com/embed/EOrE2Qr1FMU';

  constructor(private http: HttpClient, private embedService: EmbedVideoService,
    private sanitizer:DomSanitizer) { 
  }

  ngOnInit() {

    this.populateSavedSongs();
  }


  populateSavedSongs(): void {
    this.http.get('http://127.0.0.1:5000/getSavedSongs/' + localStorage.getItem('loggedInUser')).subscribe(
      ret => {
        this.urlsPerEmot = ret;
        this.songsLoaded = true;
      }
    );
  }

  getSafeUrl(url: string) {
    var x = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(x);
    return x;
}


}
