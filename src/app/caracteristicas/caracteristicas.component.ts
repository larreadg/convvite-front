import { Component } from '@angular/core';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-caracteristicas',
  templateUrl: './caracteristicas.component.html',
  styleUrls: ['./caracteristicas.component.scss']
})
export class CaracteristicasComponent {
  
  list: any[] = []

  constructor(private localService: LocalService){
    this.getCaracteristicas()
  }

  getCaracteristicas = () => {
    this.localService.getCaracteristicas().subscribe(
      data => {
        this.list = data
      },
      error => {
        this.list = []
      }
    )
  }
}
