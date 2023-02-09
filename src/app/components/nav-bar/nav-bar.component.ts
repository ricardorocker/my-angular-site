import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  homeUrl = this.router.url === '/';

  pages: Array<{ route: string, name: string, icon: string }> = [
    { route: '/', name: 'Home', icon: '../../../assets/home.png' },
    // { route: '/about', name: 'About', icon: '../../../assets/about.png' },
    { route: '/experience', name: 'Experience', icon: '../../../assets/experience.png' },
    { route: '/projects/reactive-forms', name: 'Studies', icon: '../../../assets/project.png' },
    { route: '/skills', name: 'Skills', icon: '../../../assets/skills.png' },
    { route: '/education', name: 'Education', icon: '../../../assets/education.png' },
    { route: '/contact', name: 'Contact', icon: '../../../assets/contact.png' },
  ]

  buttons = [
    { name: 'Linkedin', icon: faLinkedin, link: 'https://www.linkedin.com/in/ricardo-s-rocker/#' },
    { name: 'Github', icon: faGithub, link: 'https://github.com/ricardorocker#' },
    { name: 'Instagram', icon: faInstagram, link: 'https://www.instagram.com/ricardo.rocker/#' },
  ];

  constructor(public router: Router) { }

  public toggleNavbar(): void {
    const navbar = document.getElementById('navbarSupportedContent');
    navbar?.classList.toggle('collapse');
  }
}
