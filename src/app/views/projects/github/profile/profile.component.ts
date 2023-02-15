import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { UserGithubService } from './../../../../services/user-github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  nav: any;
  userData: any;
  userRepositories: any = [];
  repositoriesFiltered: any = [];

  faStar = faStar;

  constructor(
    private router: Router,
    private userService: UserGithubService
  ) {
    this.nav = this.router.getCurrentNavigation();
    this.userData = this.nav.extras.state;
  }

  ngOnInit(): void {
    this.getRepositories();
  }

  getRepositories(): void {
    this.userService.getRepositories(this.userData.login)
      .subscribe((repo) => {
        this.userRepositories = repo;
        this.userRepositories.sort(function (a: any, b: any) {
          return b.stargazers_count - a.stargazers_count;
        });

        this.repositoriesFiltered = this.userRepositories;
      })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.repositoriesFiltered = this.userRepositories.filter((repositorie: any) => {
      return repositorie.name.includes(value)
    })
  }

  daysAgo(pushedAt: any) {
    let now = new Date();
    let repositoryPushedAt = new Date(pushedAt);
    let daysAgo = Math.floor((now.getTime() - repositoryPushedAt.getTime()) / (1000 * 60 * 60 * 24));
    return daysAgo;
  }
}
