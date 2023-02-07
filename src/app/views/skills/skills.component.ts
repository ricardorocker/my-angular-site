import { Component } from '@angular/core';
import { faHtml5, faJs, faCss3, faAngular, faVuejs, faReact, faBootstrap, faGit, faGithub, faDocker, faDev  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    {name: 'HTML', level: 90, icon: faHtml5, canShow: true},
    {name: 'CSS', level: 90, icon: faCss3, canShow: true},
    {name: 'Javascript', level: 90, icon: faJs, canShow: true},
    {name: 'Typescript', level: 85, icon: faDev, canShow: true}, //TODO
    {name: 'Angular', level: 85, icon: faAngular, canShow: true},
    {name: 'Bootstrap', level: 80, icon: faBootstrap, canShow: true},
    {name: 'Git Versioning', level: 90, icon: faGit, canShow: true},
    {name: 'GitHub', level: 90, icon: faGithub, canShow: true},
    {name: 'Docker', level: 80, icon: faDocker, canShow: true},
    {name: 'Azure DevOps', level: 80, icon: faDev, canShow: true}, //TODO
    {name: 'PostgresSQL', level: 70, icon: faDev, canShow: true}, //TODO
    {name: 'React', level: 70, icon: faReact, canShow: true},
    {name: 'Vue', level: 50, icon: faVuejs, canShow: true},
    {name: 'Firebase', level: 50, icon: faDev, canShow: true}, //TODO
    {name: '', level: 0, icon: faDev, canShow: false},
  ]

}
