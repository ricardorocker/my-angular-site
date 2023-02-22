import { Component } from '@angular/core';

import { faPlayCircle  } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  playIcon = faPlayCircle;
  projects = [
    {
      title: 'Search Devs',
      description: 'Project with github API integration to search for users and fetch profile information and repositories',
      thumb: '../../../assets/search-devs.jpeg',
      video: '../../../assets/search-devs.mp4',
      link: 'https://ricardorocker.github.io/serachDevs-angular/'
    },
    {
      title: 'Memoteca',
      description: 'Memory management project by cards with complete CRUD, pagination, favorites and fake API with json-server',
      thumb: '../../../assets/Memoteca.jpg',
      video: '../../../assets/search-devs.mp4',
      link: 'https://github.com/ricardorocker/memoteca-angular'
    },
    {
      title: 'Budget App',
      description: 'Developing... Personal budget control system, with registration module, matrix visualization (income-expenses) and dashboard.',
      thumb: '../../../assets/Budget.jpg',
      video: '../../../assets/search-devs.mp4',
      link: 'https://github.com/ricardorocker/budget-system'
    }
  ]

  playVideo(videoUrl: string) {
    const video = document.createElement('video');
    video.src = videoUrl;
    video.autoplay = true;
    video.controls = true;
    video.style.width = '100%';
    video.style.height = '100%';

    // TODO: Implementar
    // const modal = this.modalService.open(PlayVideoComponent);
    // modal.componentInstance.video = video;
  }

}
