import { Component } from '@angular/core';
import { LocalService } from '../services/local.service';
import { carouselBreakPoints } from '../Constants';

@Component({
  selector: 'app-que-incluye',
  templateUrl: './que-incluye.component.html',
  styleUrls: ['./que-incluye.component.scss']
})
export class QueIncluyeComponent {

  list: any[] = []
  responsiveOptions = carouselBreakPoints

  constructor(private localService: LocalService){
    this.getQueIncluye()
  }

  getQueIncluye = () => {
    this.localService.getQueIncluye().subscribe(
      data => {
        this.list = data
      },
      error => {
        this.list = []
      }
    )
  }
}
