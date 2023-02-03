import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  pages: Array<{route: string, name:string}> = [
    {route: '/', name: 'Home'},
    {route: '/about', name: 'About'},
    {route: '/experience', name: 'Experience'},
    {route: '/projects', name: 'Projects'},
    {route: '/skills', name: 'Skills'},
    {route: '/education', name: 'Education'},
    {route: '/contact', name: 'Contact'},
  ]

}
