import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AdItem } from "../ad-item";
import { AdDirective } from "../ad.directive";
  import { from } from 'rxjs';

@Component({
  selector: 'app-adbanner',
  templateUrl: './adbanner.component.html',
  styleUrls: ['./adbanner.component.scss']
})
export class AdbannerComponent implements OnInit {

  @Input() ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost :  AdDirective;
  interval : any;

  constructor(private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit(): void {
    // this.loadComponent();
    this.getAds();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex +1) % this.ads.length;
    //showcase component at that pertucular index
    // const adItem = this.ads[0];
    const adItem = this.ads[this.currentAdIndex];

    const  componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    // clear existing/generated ad view
    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();
    
    const componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.data = adItem.data;

  }

  getAds() {
    // this will refresh and reload new ad at every 5 second
    this.interval = setInterval(() => {
      this.loadComponent();
    },5000);
  }

}
