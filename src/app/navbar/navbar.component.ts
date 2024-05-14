import { Component } from '@angular/core';
import { navItems } from '../Constants';
import { scrollToElement } from '../Utils';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  navItems = navItems
  scrollToElement = scrollToElement
  sidebarVisible = false

  constructor(private sidebarService: SidebarService) {}

  openSidebar() {
    this.sidebarService.openSidebar();
  }
}
