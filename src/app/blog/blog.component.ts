import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ServicioService } from '../services/servicio.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  constructor(public cv: ServicioService,
    private sanitizer: DomSanitizer
  ) { }

  getVideoIframe(url: any) {
    let video;
    let results;

    if (url === null) {
      return '';
    }
    results = url.match('[\\?&]v=([^&#]*)');
    video = (results === null) ? url : results[1];

    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video);
  }

}
