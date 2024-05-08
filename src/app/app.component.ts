import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CountUpModule } from 'ngx-countup';
import { LayoutModule } from './layout/layout.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule,CountUpModule, RouterOutlet,LayoutModule],

})
export class AppComponent {
  title = 'zeraki-demo';

}
