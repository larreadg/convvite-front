import { Component } from '@angular/core';
import { scrollToElement } from '../Utils';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  scrollToElement = scrollToElement
}
