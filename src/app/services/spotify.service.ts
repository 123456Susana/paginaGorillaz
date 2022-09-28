import { Injectable } from '@angular/core';
import{ HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  URI:string="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=us";
  token:string="Bearer BQATLLG4PVd8iyY7y278klFa7tH-_sKqReY7FERpAB7ZYo1hDOFYqs_1O19x1_KTrnx-NydoMjACzhRu9iYRUj60ELi9IzQYPOUS9oULbpwSksumDGE8dfuOzImaDMqT2WBGRMseCh0o-AKcC1RMN5JGBGUdcMkbgCb7b5mRT5s1dUFGjxUd92Cs2EXjqeCfWOM"
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
