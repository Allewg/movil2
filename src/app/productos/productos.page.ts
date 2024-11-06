import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../servicio/auth/productos.service';
import { AuthService } from '../servicio/auth/auth.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  constructor(public productos: ProductosService, private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.productos.consultarProductos(); }
    
  salir() {
    this.authService.cerrarSesion(); 
    this.router.navigate(['iniciar-sesion']); 
  }
}