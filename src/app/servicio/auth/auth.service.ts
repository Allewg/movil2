import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly URL_LOGIN: string = 'https://dummyjson.com/auth/login'
  constructor(
    private http: HttpClient
  ) { }
public iniciarSesion(nombre_usuario: string, contrasenia:string){
  const cuerpo = {
    username: nombre_usuario,
    password: contrasenia
  }
  this.http.post(this.URL_LOGIN,JSON.stringify(cuerpo), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .subscribe(resultado => {
    console.log(resultado);
  });
}


}
