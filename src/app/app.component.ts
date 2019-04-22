import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  links: object[] = [
    { path: '/main', label: 'Home', active: 'button-active', icon: 'home'},
    { path: '/films', label: 'Films', active: 'button-active', icon: 'list_alt'}
  ];

}
