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
  
   usuario: Usuario = new Usuario('xx', 'xx');

  //credenciales correctas
   correctoUsuario = 'Nacho';
   correctoClave = '1234';

  constructor(private router: Router) {}

  ingresar() {

    console.log("Intentando ingresar con:", this.usuario.nombre, this.usuario.clave);
    console.log("Valores esperados:", this.correctoUsuario, this.correctoClave);
    if (

      this.usuario.nombre === this.correctoUsuario &&
      this.usuario.clave === this.correctoClave
    ) {
      // Navegar a Bienvenido si las credenciales son correctas
      this.router.navigate(['/bienvenido']);
    } else {
      // alert('Usuario o contraseña incorrectos --- ');
      this.router.navigate(['/error']);
    }
  }
}
