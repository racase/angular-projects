import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agua } from './agua.class';
import { Observable } from "rxjs/Observable";
import { LoginService } from './login.service';
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class AguaService {

  constructor(private http : HttpClient,
    private _loginService : LoginService) { }

  public getAll() : Observable<Agua[]> {
     let observableResponse : Observable<Agua[]> 
     = this.http.
        get(
          "http://192.168.142.1:8080/ecotonic/api/agua",
          {
            headers: new HttpHeaders().set(
              'Authorization', 
              this._loginService.getCurrentUserToken()
            )
          }
        );

     return observableResponse;
  }

  public createAgua(miAgua : Agua) : Observable<any> {
    let response : Observable<any> = this.http.
      post("http://localhost:3000/agua", miAgua);

    return response;

  }
}
