import { animate, state, style, transition, trigger } from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        style({ opacity: 0 }),
        animate('350ms', style({ opacity: 1 }))
    ]),
])

export const submenu =  trigger('submenu',[
  state('hidden',
    style({
      height: 0,
      overflow: 'hidden',
    })),
    state('visible',
    style({
      height: '*',
    })),
    transition('visible <=> hidden',[style({overflow: 'hidden'}),
      animate('{{transitionParams}}')
    ]),
    transition('void => *',
    animate(0)
  )
])

