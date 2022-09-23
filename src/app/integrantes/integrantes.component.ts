import { Component } from '@angular/core';
import { Integrantes } from '../interfaces/integrantes';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent  {

  integrantes:Integrantes[]=[
    {"nombre":"2-D","foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/g0.jpg?alt=media&token=c88eac57-410e-4e73-9a7b-06b18a60c027","rol":"Vocalista"},
    {"nombre":"Noodle","foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/g00.webp?alt=media&token=8e3482b0-35de-45dd-b5e0-f408ab67fa28","rol":"Guitarrista"},
    {"nombre":"Murdoc Niccals", "foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/g000.webp?alt=media&token=64aa785d-9cd6-4243-a54f-57bf8768db1d","rol":"Bajista"},
    {"nombre":"Russel Hobbs","foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/g0000.webp?alt=media&token=f5bc89af-8c2e-4307-bfa7-9a6056ab94d3","rol":"Baterista"}
  ]

  constructor() {}


}
