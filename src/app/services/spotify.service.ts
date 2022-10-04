import { Injectable } from '@angular/core';
import{ HttpClient, HttpClientModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  URI:string="https://api.spotify.com/v1/artists/3AA28KZvwAUcZuOKwyblJQ/top-tracks?market=us";
  token:string="Bearer BQB4JxCxqUpgxL6YOIYvc0SCeiM-wSwbjlgoGAgqRe4uiBNhRlaYI_PMFnglDVSVn7T83-XYlRTT0-mBdGqv---pIhI2WtoyQW2DzCppmpixg1IoH8AMdDOpQmuVd3iar0NduqsSSKukC22dnhp3jT9NdV31MMr7jGVapVjkxDZiTGTrwnRhtKHyVSsa-tkR0xQ"
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
