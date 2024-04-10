import { Component } from '@angular/core';
import { Usuario } from '../../clases/Usuario';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  usuario: Usuario = new Usuario('Nacho', '1234');
  //usuario = '';
  clave = '';

  //credenciales correctas
  private correctoUsuario = 'usuario';
  private correctoClave = 'clave123';

  constructor(private router: Router) {}

  ingresar() {
    if (
      this.usuario.nombre === this.correctoUsuario &&
      this.clave === this.correctoClave
    ) {
      // Navegar a Bienvenido si las credenciales son correctas
      this.router.navigate(['/bienvenido']);
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  }
}
