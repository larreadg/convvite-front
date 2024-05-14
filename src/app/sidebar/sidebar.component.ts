import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../services/sidebar.service';
import { navItems } from '../Constants';
import { scrollToElement } from '../Utils';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isOpen = false
  navItems = navItems
  scrollToElement = scrollToElement

  constructor(private sidebarService: SidebarService) { }

  ngOnInit() {
    this.sidebarService.sidebarOpen$.subscribe(open => {
      this.isOpen = open;
    });
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }

  goTo(id: string){
    this.scrollToElement(id)
    this.closeSidebar()
  }

}
