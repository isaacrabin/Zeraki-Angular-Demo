import { BrowserPlatformLocation, CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { ISideNavToggle, navbarData,studentNavData,teacherNavData } from './nav-data';
import { INavbarItem } from '../../_models/types';
import { Router, RouterModule } from '@angular/router';
import { SubMenuComponent } from "./sub-menu/sub-menu.component";
import { fadeInOut, submenu } from '../../_utils/animations';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';


@Component({
    selector: 'app-sidenav',
    standalone: true,
    providers: [BrowserPlatformLocation],
    templateUrl: './sidenav.component.html',
    styleUrl: './sidenav.component.scss',
    animations: [
      fadeInOut,
      submenu,
      trigger('rotate', [
        transition(':enter', [
            animate('1000ms', keyframes([
                style({ transform: 'rotate(0deg)', offset: '0' }),
                style({ transform: 'rotate(2turn)', offset: '1' })
            ]))
        ])
      ])
    ],
    imports: [CommonModule, RouterModule, SubMenuComponent]
})
export class SidenavComponent implements OnInit {


  @Output() ontoggleSideNav: EventEmitter<ISideNavToggle> = new EventEmitter();
  collapsed: boolean = false;
  screenWidth: number = 0;
  navData:INavbarItem[]  = navbarData;
  multiple: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: any){
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768 ) {
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    this.collapsed = false;
    }
    else{
      this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
      this.collapsed = true;
    }
  }

  constructor(private router: Router){}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed = false;
    }
    else{
      this.collapsed = true;
    }

    if(sessionStorage.getItem('userType') === 'student'){
      this.navData = studentNavData;
    }
    else if(sessionStorage.getItem('userType') === 'teacher'){
      this.navData = teacherNavData;
    }
    else{
      this.navData = navbarData;
    }
  }

  toggleCollapse(){
    this.collapsed = !this.collapsed;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  closeSideNav(){
    this.collapsed = false;
    this.ontoggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  handleClick(item: INavbarItem): void{
    if(!this.multiple){
     for(let modelItem of this.navData){
      if(item !== modelItem && modelItem.expanded){
        modelItem.expanded = false;
      }
    }
  }
  item.expanded = !item.expanded;
}

getActiveClass(data: INavbarItem): string {
  return this.router.url.includes(data.routerLink) ? 'active' : '';
}

shrinkItems(item: INavbarItem): void {
  if (!this.multiple) {
    for(let modelItem of this.navData) {
      if (item !== modelItem && modelItem.expanded) {
        modelItem.expanded = false;
      }
    }
  }
}
}
