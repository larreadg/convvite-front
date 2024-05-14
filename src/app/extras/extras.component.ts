import { Component } from '@angular/core';
import { LocalService } from '../services/local.service';
import { carouselBreakPoints } from '../Constants';

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss']
})
export class ExtrasComponent {

  list: any[] = []
  responsiveOptions = carouselBreakPoints 

  constructor(private localService: LocalService){
    this.getExtras()
  }

  getExtras = () => {
    this.localService.getExtras().subscribe(
      data => {
        this.list = data
      },
      error => {
        this.list = []
      }
    )
  }

}
