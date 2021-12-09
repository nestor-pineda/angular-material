import { Component, OnInit } from '@angular/core';
import { Iheader } from './model/iheader';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public headerComponent: Iheader;
  constructor() {
    this.headerComponent = {
      logo: {
        img: 'https://images.squarespace-cdn.com/content/v1/5f62b687cae73d2408a06539/1602807735303-4W086W30YX6B3D23N04L/image-asset.png',
        'alt-text': 'Fedex',
      },
      contact: {
        email: 'info@fedex.com',
        tel: '+91 123 456 789',
      },
      nav: {
        links: ['Home', 'About', 'Contact'],
      },
    };
  }

  ngOnInit(): void {}
}
