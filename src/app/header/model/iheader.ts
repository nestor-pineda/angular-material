import { InitialNavigation } from '@angular/router';

export interface Iheader {
  logo: Ilogo;
  contact: Iinfo;
  nav: Inav;
}

export interface Ilogo {
  img: string;
  'alt-text': string;
}

export interface Iinfo {
  email: string;
  tel: string;
}

export interface Inav {
  links: string[];
}
