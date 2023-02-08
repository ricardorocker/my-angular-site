import { Component } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {
  items = [
    {name: 'Home', link: '/'},
    {name: 'About', link: '/about'},
    {name: 'Contact', link: '/contact'},
  ];


  buttons = [
    {name: '1', link: '/'},
    {name: '2', link: '/about'},
    {name: '3', link: '/contact'},
  ];

  public toggleNavbar(): void {
    const navbar = document.getElementById('navbarSupportedContent');
    navbar?.classList.toggle('collapse');
  }
}
