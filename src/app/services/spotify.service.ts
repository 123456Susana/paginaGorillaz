import { Injectable } from '@angular/core';
import{ HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  URI:string="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=us";
  token:string="Bearer BQAN_YaFf4AwHfbpSOKeaYSctl8JgH_1RncIqlRb6wp9uIHMCprse3ql5p5j_b-dQSSsMdDNd7uvUcnehyhiI80kvhQPIhDstBS0I6Two3k-VBj3DfBiItAKqciIkgdAIfeYyNN0IsRqTbucXwbZgHBXYNrI6LHHrOXpa_LLETeHo33jaHNb2JS7vFza3Dp0Mn0"
  constructor(public peticion: HttpClient) {
    console.log("arrancando servicio")

  }

  public traerCanciones():Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: this.token
      })
    };

    return this.peticion.get(this.URI,httpOptions)
  }
}
