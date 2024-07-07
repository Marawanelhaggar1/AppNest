import { Component } from '@angular/core';
interface sideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent {
  isSideNanCollapsed: boolean = false;
  screenWidth: number = 0;

  onToggleSideNav(data: sideNavToggle): void {
    this.isSideNanCollapsed = data.collapsed;
    this.screenWidth = data.screenWidth;
  }
}
