import { Component, Input } from '@angular/core';
import { ISideNavToggle } from '../sidenav/nav-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {


  @Input() collapsed: boolean = false;
  // @Input() screenWidth: number = 0;

  isSideNavCollapsed = false;
  screenWidth: number = 0;

  onToggleSideNav(data: ISideNavToggle): void{
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;

  }

  constructor(private router: Router){

  }

  logout(){
    this.router.navigate(['/auth/login']);
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.collapsed = true;
    this.getBodyClass();

    setTimeout(() => {
      console.log(this.getBodyClass())
    },200)
  }

  getBodyClass(): string{
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    }

    else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0){
      styleClass = 'body-md-screen';
    }
    return styleClass;
  }

}
