/*
import { Component } from '@angular/core';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

}
*/

import { Component } from '@angular/core';
import { Usuario } from '../../clases/Usuario';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  
  usuario: Usuario = new Usuario('', '');

  constructor(private router: Router, private storageService: StorageService) {}

  registrar() {
    this.storageService.guardarUsuario(this.usuario);
    this.router.navigate(['/login']); //redirige al login 
  }
}