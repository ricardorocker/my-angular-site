import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  smallScreen: boolean = false;

  pages: Array<{ route: string, name: string, icon: string }> = [
    { route: '/', name: 'Home', icon: '../../../assets/home.png' },
    // { route: '/about', name: 'About', icon: '../../../assets/about.png' },
    { route: '/experience', name: 'Experience', icon: '../../../assets/experience.png' },
    { route: '/projects', name: 'Studies', icon: '../../../assets/project.png' },
    { route: '/skills', name: 'Skills', icon: '../../../assets/skills.png' },
    { route: '/education', name: 'Education', icon: '../../../assets/education.png' },
    { route: '/contact', name: 'Contact', icon: '../../../assets/contact.png' },
  ]

  constructor(private ngZone: NgZone) { }

  ngOnInit(): void {
    this.verifySize();
    this.verifyResize();
  }

  verifySize(): void {
    window.innerWidth < 750 ? this.smallScreen = true : this.smallScreen = false;
  }

  verifyResize(): void {
    window.onresize = () => {
      this.ngZone.run(() => {
        this.verifySize();
      })
    }
  }
}
