import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dlte-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Output() imageClick = new EventEmitter();
  sliderCollections;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = true;
  }

  ngOnInit() {
    this.sliderCollections = [
      { id: 1, caption: 'First slide label',
        alt: 'Random first slide', excerpt: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'},
      { id: 2, caption: 'Second slide label',
        alt: 'Random second slide', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, possimus.'},
      { id: 3, caption: 'Third slide label',
        alt: 'Random third slide', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
      { id: 4, caption: 'Fourth slide label',
        alt: 'Random fourth slide', excerpt: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'},
      { id: 5, caption: 'Fifth slide label',
        alt: 'Random fifth slide', excerpt: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'}
    ];
  }

  imageClicked() {
    this.imageClick.emit();
  }

}
