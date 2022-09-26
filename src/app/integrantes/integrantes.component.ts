import { Component } from '@angular/core';
import { Integrantes } from '../interfaces/integrantes';

@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent  {

  integrantes:Integrantes[]=[
    {"nombre":"2-D","foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/a2.jpg?alt=media&token=e183adf9-ab36-44f3-a120-21240bafa38a","rol":"Vocalista","descripcion":"Stuart Pot (Tambien conocido como 2-D. Stu-Pot, Pot y Face Ache) es el vocalista, tecladista y pianista principal.  De carácter amable pero muy torpe, inocente y distraído. Se caracteriza sobre todo por su extraño pelo azul el cual fue causado después de caer de un árbol y perderlo, por lo cual, volvió a crecer de este color, y sus ojos completamente negros, esto por distintos accidentes que le provocaron un hifema causados por Murdoc Niccals. "},
    {"nombre":"Noodle","foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/a1.jpg?alt=media&token=63815a88-52f5-4eb7-b3eb-3dbc8fbee26c","rol":"Guitarrista","descripcion":"Llegó a la banda siendo una niña muy pequeña sin recordar nada de su pasado, y obtuvo el puesto por ser una excelente guitarrista. De carácter tranquilo y muy inteligente, es la voz de la razón, por lo que los demás le tienen mucho respeto.  "},
    {"nombre":"Murdoc Niccals", "foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/a4.jpg?alt=media&token=323151ae-007b-45eb-90e8-009750164c34","rol":"Bajista","descripcion":"De carácter sádico, agresivo y malvado. Murdoc es la mente maestra detrás de Gorillaz, es un personaje bastante sarcástico, cruel, arrogante y ególatra, personalidad que fue desarrollando durante años gracias a los abusos y maltratos que sufrió desde su niñez por parte de su padre."},
    {"nombre":"Russel Hobbs","foto":"https://firebasestorage.googleapis.com/v0/b/saltiendatcc.appspot.com/o/a5.jpg?alt=media&token=e4db3458-3707-4337-bde9-e377a65031ae","rol":"Baterista","descripcion":"Russel es un experto en la batería y un gran amigo pero de carácter muy fuerte cuando se necesita. Tiene un cerdo como mascota y una muy buena relación con Noodle. "}
  ]

  constructor() {}


}
