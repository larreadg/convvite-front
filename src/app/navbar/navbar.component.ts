import { Component } from '@angular/core';
import { navItems } from '../Constants';
import { scrollToElement } from '../Utils';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  navItems = navItems
  scrollToElement = scrollToElement
}
