import { LoginService } from './login.service';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agua } from './agua.class';
import { Observable } from "rxjs/Observable";
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AguaService {
  apiUrl: string = environment.apiUrl;

  constructor(private http : HttpClient, private _loginService: LoginService) { }

  public getAll() : Observable<Agua[]> {
     let observableResponse : Observable<Agua[]> 
     = this.http.
        get(this.apiUrl + 'agua',{
          headers: new HttpHeaders().set(
              'Authorization',
              this._loginService.getCurrentUserToken()
          )
        }); 

     return observableResponse;
  }

  public createAgua(miAgua : Agua) : Observable<any> {
    let response : Observable<any> = this.http.
      post("http://localhost:3000/agua", miAgua);

    return response;

  }
}
