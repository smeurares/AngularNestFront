import { Component, Input } from '@angular/core';
import { CarouselItem } from '../../interfaces/carousel-item';

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
})
export class CarouselItemComponent {
  @Input() item!: CarouselItem;
}
