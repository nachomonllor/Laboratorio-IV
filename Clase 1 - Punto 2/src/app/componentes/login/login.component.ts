import { Component } from '@angular/core';
import { Usuario } from '../../clases/Usuario';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  usuario: Usuario = new Usuario('xx', 'xx');

  constructor(private router: Router, private storageService: StorageService) {}

  ingresar() {
    if (this.storageService.validarUsuario(this.usuario.nombre, this.usuario.clave)) {
      this.router.navigate(['/bienvenido']);
    } else {
      this.router.navigate(['/error']);
    }
  }

  navegarARegistro() {
    this.router.navigate(['/registro']);
  }

}

