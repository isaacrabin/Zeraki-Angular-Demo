import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { NgxTypedJsModule } from 'ngx-typed-js'

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule,CarouselComponent,NgxTypedJsModule ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

}
