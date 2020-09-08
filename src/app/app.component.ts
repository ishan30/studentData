import { Component } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  ads : AdItem[];
  title = 'my-app';
  constructor(private adService : AdService){}

  ngOnInit(){
    //load all the ads
    this.ads = this.adService.getAds();
  }
}
