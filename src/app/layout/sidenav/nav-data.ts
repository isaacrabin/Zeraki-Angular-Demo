import { INavbarItem } from "../../_models/types";

export const navbarData: INavbarItem[] = [
  {
    routerLink:'analytics',
    icon:'fal fa-home',
    label:'Dashboard',
  },

  {
    routerLink:'f3',
    icon:'fal fa-tags',
    label:'Performance',
    items:[
      {
        routerLink:'dashboard/performance/f1',
        label:'Form1',
      },
      {
        routerLink:'dashboard/performance/f2',
        label:'Form2',
      },
      {
        routerLink:'dashboard/performance/f3',
        label:'Form3',
      },
      {
        routerLink:'dashboard/performance/f4',
        label:'Form4',
      }
    ]
  },

];

export const teacherNavData: INavbarItem[] = [
  {
    routerLink:'dashboard/teacher/analytics',
    icon:'fal fa-home',
    label:'Dashboard',
  },

  {
    routerLink:'f3',
    icon:'fal fa-tags',
    label:'Performance',
    items:[
      {
        routerLink:'dashboard/teacher/ENG',
        label:'ENG',
      },
      {
        routerLink:'dashboard/teacher/KIS',
        label:'KIS',
      },
      {
        routerLink:'dashboard/teacher/MAT',
        label:'MAT',
      },
      {
        routerLink:'dashboard/teacher/PHY',
        label:'PHY',
      }
    ]
  },

];

export const studentNavData: INavbarItem[] = [
  {
    routerLink:'dashboard/student/analytics',
    icon:'fal fa-home',
    label:'Dashboard',
  },

  {
    routerLink:'f3',
    icon:'fal fa-tags',
    label:'Performance',
    items:[
      {
        routerLink:`dashboard/student/ENG`,
        label:'ENG',
      },
      {
        routerLink:'dashboard/student/KIS',
        label:'KIS',
      },
      {
        routerLink:'dashboard/student/MAT',
        label:'MAT',
      },
      {
        routerLink:'dashboard/student/PHY',
        label:'PHY',
      },
    ]
  },

];

export interface ISideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}
