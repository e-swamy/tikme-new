import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss']
})
export class HeroSliderComponent {
  showNavigationArrows = false;
  showNavigationIndicators = false;
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
	}

  ngOnInit() { }

  sliders = [
    {
      id:1,
      imgPath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/63439465f0824c81088e0d8f00c24dd0"
    },
    {
      id:2,
      imgPath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/7f1dc377859eb6ea1f210d6b2f8c8aa5"
    },
    {
      id:3,
      imgPath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/ae95e0a07148bc085334f6054ee74236"
    },
    {
      id:4,
      imgPath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/47446475aee4c28c35800745e0be7345"
    },
    {
      id:5,
      imgPath: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_850,h_504/rng/md/carousel/production/e95931a2a0780d042c206824051d6920"
    }
  ];
}
