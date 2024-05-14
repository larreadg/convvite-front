import { Component } from '@angular/core';
import { email, telefono } from '../Constants';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {
  telefono = telefono
  email = email
}
