import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../clases/Usuario';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.usuarios = this.storageService.obtenerUsuarios();
  }
}