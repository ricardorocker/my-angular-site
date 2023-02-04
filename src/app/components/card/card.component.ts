import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() hasImage: boolean = true;
  @Input() title: string = '';
  @Input() imageSrc: string = '../../../assets/profile.jpg';

}
