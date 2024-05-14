import { Component, ViewChild } from '@angular/core';
import { carouselBreakPoints, telefono } from '../Constants';
import { LocalService } from '../services/local.service';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent {

  proyectos: any = []
  responsiveOptions = carouselBreakPoints
  telefono = telefono
  @ViewChild('carousel') sectionCarousel!: Carousel

  constructor(private localService: LocalService){
    this.getProyectos()
  }

  getProyectos = () => {
    this.localService.getProyectos().subscribe(
      data => {
        this.proyectos = data
      },
      error => {
        this.proyectos = []
      }
    )
  }
}
