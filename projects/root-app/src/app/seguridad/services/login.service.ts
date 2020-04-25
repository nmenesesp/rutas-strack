import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private token = '';

  configUrl = 'mock/users.json';

  constructor(private http: HttpClient) { }

  login(body: any) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };

    //return this.http.post('https://rutas-clientes.azurewebsites.net/api/user/signin', body, options);

    return this.http.get(this.configUrl).pipe(
      map(
        data => {
          const usuarios: any = data;
          if (usuarios.filter(user => user.user = body.email && user.pwd === body.password ).length > 0) {
            return true;
          } else {
            throw new Error(
              'Usuario o contraseña inválidos');
          }
        })
    );
  }

  setToken(value: string) {
    this.token = value;
  }

  hasToken(): boolean {
    return this.token !== '';
  }

  getToken() {
    return this.token;
  }
}
