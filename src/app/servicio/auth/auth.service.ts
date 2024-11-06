import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioLogeado } from 'src/app/interfaces/UsuarioLogeado';
import { CuerpoLogin } from 'src/app/interfaces/CuerpoLogin';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

private readonly URL_LOGIN: string = 'https://dummyjson.com/auth/login';
public usuarioLogeado : UsuarioLogeado | null = null;
public accessToken: string | null = null;

private $cargando = new BehaviorSubject<boolean>(false);
public cargando = this.$cargando.asObservable();


  constructor(
    private http: HttpClient,
    private router: Router 
  ) { }
public iniciarSesion(nombre_usuario: string, contrasenia:string){
this.$cargando.next(true);

  const cuerpo = {
    username: nombre_usuario,
    password: contrasenia
  }
  this.http.post<UsuarioLogeado>(this.URL_LOGIN,JSON.stringify(cuerpo), {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .subscribe(resultado => {
    this.accessToken = resultado.accessToken
    this.usuarioLogeado = resultado;
    this.$cargando.next(false);
    this.router.navigate(['/productos']);
    console.log(resultado);
  }
);
 
}

public cerrarSesion() {
  if(this.usuarioLogeado){
    this.usuarioLogeado = null;
    this.accessToken = null;
  }
  }


}
