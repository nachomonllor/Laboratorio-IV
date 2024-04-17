import { Injectable } from '@angular/core';
import { Usuario } from '../clases/Usuario';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    this.inicializarUsuariosDefault();
  }

  inicializarUsuariosDefault() {
    if (!this.usuarioExiste("admin")) {
      this.guardarUsuario(new Usuario("admin", "1234"));
    }
  }

  usuarioExiste(nombre: string): boolean {
    const usuarios = this.obtenerUsuarios();
    return usuarios.some(u => u.nombre === nombre);
  }

  guardarUsuario(usuario: Usuario): void {
    let usuarios = this.obtenerUsuarios();
    usuarios.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
  }

  obtenerUsuarios(): Usuario[] {
    const usuarios = localStorage.getItem('usuarios');
    return usuarios ? JSON.parse(usuarios) : [];
  }

  validarUsuario(nombre: string, clave: string): boolean {
    const usuarios = this.obtenerUsuarios();
    return usuarios.some(u => u.nombre === nombre && u.clave === clave);
  }
}