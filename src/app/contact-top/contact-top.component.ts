import { Component } from '@angular/core';
import { email, telefono } from '../Constants';

@Component({
  selector: 'app-contact-top',
  templateUrl: './contact-top.component.html',
  styleUrls: ['./contact-top.component.scss']
})
export class ContactTopComponent {
  telefono = telefono
  email = email
}
