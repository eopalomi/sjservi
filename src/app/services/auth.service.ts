import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Rest APi - Heroku
  // https://dev01-api-rest.herokuapp.com
  private url: string = 'https://dev01-api-rest.herokuapp.com';
  userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  login(usuario: UsuarioModel) {
    const autData = {
      ...usuario
    };

    return this.http.post(`${this.url}/login`, autData)
      .pipe(
        map(resp => {
          this.guardarToken(resp[0].token);

          return resp;
        })
      );
  }

  private guardarToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    let hoy = new Date();
    hoy.setSeconds(3600); // una hora

    localStorage.setItem('expira', hoy.getTime().toString());
  }

  leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }

    return this.userToken;
  }

  estaAutenticado(): boolean {
    if (this.userToken.length < 2) {
      return false;
    }

    const expira = Number(localStorage.getItem('expira'));
    const expiraDate = new Date();
    expiraDate.setTime(expira);

    if (expiraDate > new Date()) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

}
