import { Component } from '@angular/core';

declare const window: Window;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
window: any;

  constructor() {}

}
