import { Component } from '@angular/core';
import {SpotifyService} from '../services/spotify.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent {

    public canciones:any[]=[]

  constructor(public peticion: SpotifyService) {

    //como utilizar los datos que llegan de un servicio o API
    this.peticion.traerCanciones()
    .subscribe(respuesta=>{

      this.canciones=respuesta.tracks
      console.log(this.canciones)
    })
  }
  }




