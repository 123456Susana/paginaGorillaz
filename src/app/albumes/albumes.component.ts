import { Component } from '@angular/core';
import { TopService } from '../services/top.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent {

  public respuestaDeServicios:any[]=[]

  constructor(public peticion: TopService) {

    //como utilizar los datos que llegan de un servicio o API
    this.peticion.buscar()
    .subscribe(respuesta=>{
      this.respuestaDeServicios=respuesta.datos
      console.log(this.respuestaDeServicios)
    })
  }
  }




