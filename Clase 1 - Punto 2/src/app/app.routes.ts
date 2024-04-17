import { Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';


export const routes: Routes = [
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: 'registro', component: RegistroComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirección a 'bienvenido'
    { path: '**', component: ErrorComponent }, // Error 404
  ];
