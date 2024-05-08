export interface INavbarItem {
  routerLink: string;
  icon?: string;
  label: string;
  expanded?: boolean;
  items?: INavbarItem[]
}


