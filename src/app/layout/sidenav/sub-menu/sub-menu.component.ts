import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { INavbarItem } from '../../../_models/types';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { fadeInOut, submenu } from '../../../_utils/animations';

@Component({
  selector: 'app-sub-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrl: '../sidenav.component.scss',
  template:`
  <ul *ngIf="collapsed && data.items && data.items.length > 0"
  [@submenu]="expanded ? {value: 'visible', params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07,1)', height: '*'}} :
  {value: 'hidden',params: {transitionParams: '400ms cubic-bezier(0.86, 0, 0.07,1)'}, height: 0}"
  class="sublevel-nav">
    <li *ngFor="let item of data.items" class="sublevel-nav-item"
    (click)="handleClick(item)">
      <a class="sublevel-nav-link"
      *ngIf="item.items && item.items.length > 0"
      >
      <i class="sublevel-link-icon fa fa-circle"></i>
      <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
      <i *ngIf="item.items && collapsed"
      [ngClass]="item.expanded ? 'fal fa-angle-right': 'fal fa-angle-down'"></i>
      </a>
      <a class="sublevel-nav-link"
      *ngIf="item.items || (item.items && data.items.length === 0)"
      [routerLink]="[item.routerLink]"
      routerLinkActive="active-sublevel"
      [routerLinkActiveOptions]="{exact:true}">
      <i class="sublevel-link-icon fa fa-circle"></i>
      <span class="sublevel-link-text" @fadeInOut *ngIf="collapsed">{{item.label}}</span>
    </a>
    <div *ngIf="item.items && item.items.length > 0">
      <app-sub-menu
        [collapsed]="collapsed"
        [expanded]="item.expanded"
        [multiple]="multiple"
      ></app-sub-menu>
    </div>
    </li>
  </ul>
  `,
  animations:[
    fadeInOut,
    submenu
  ]
})
export class SubMenuComponent {

  @Input() data: INavbarItem = {
    routerLink: '',
    icon: '',
    label: '',
    items: []
  }

  @Input() collapsed: boolean = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  handleClick(item: any): void{
    if(!this.multiple){
      if(this.data.items && this.data.items.length >0){
        for(let modelItem of this.data.items){
          if(item !== modelItem && modelItem.expanded){
            modelItem.expanded = false;
          }
      }
    }
  }

}

}
