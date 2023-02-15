import { Component, Input } from '@angular/core';

import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUsers, faUserPlus, faBuilding, faMapMarkedAlt, faEnvelope, faGlobe, faStar, faCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent {
  @Input() userData: any;

  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faBuilding = faBuilding;
  faMapMarkedAlt = faMapMarkedAlt;
  faEnvelope = faEnvelope;
  faGlobe = faGlobe;
  faTwitter = faTwitter;
  faStar = faStar;
  faCircle = faCircle;

}
