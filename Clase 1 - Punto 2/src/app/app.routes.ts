import { Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';


export const routes: Routes = [
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'login', component: LoginComponent },
    { path: 'error', component: ErrorComponent },
    { path: '', redirectTo: '/bienvenido', pathMatch: 'full' }, // Redirección a 'bienvenido'
    { path: '**', component: ErrorComponent }, // Wildcard Route para un 404
  ];
