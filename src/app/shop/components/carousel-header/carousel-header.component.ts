import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel-header',
  templateUrl: './carousel-header.component.html',
  styleUrls: ['./carousel-header.component.scss'],
})
export class CarouselHeaderComponent {
  items: any = [
    {
      index: 1,
      title: 'First item',
      imageUrl: 'https://picsum.photos/1920/850?random=1&grayscale&blur=5',
      description: 'Just a picsum.',
    },
    {
      index: 2,
      title: 'Second item',
      imageUrl: 'https://picsum.photos/1920/850?random=2&grayscale&blur=5',
      description: 'Just a picsum.',
    },
    {
      index: 3,
      title: 'Third item',
      imageUrl: 'https://picsum.photos/1920/850?random=3&grayscale&blur=5',
      description: 'Just a picsum.',
    },
    {
      index: 4,
      title: 'Fourth item',
      imageUrl: 'https://picsum.photos/1920/850?random=4&grayscale&blur=5',
      description: 'Just a picsum.',
    },
  ];
}
