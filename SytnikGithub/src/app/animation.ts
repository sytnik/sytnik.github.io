import {trigger, transition, style, animate} from '@angular/animations';

export const fadeInAnimation =
  trigger('fadeInAnimation', [
    transition('* => *', [
      style({opacity: 0}),
      animate('200ms', style({opacity: 1}))
    ])
  ]);
