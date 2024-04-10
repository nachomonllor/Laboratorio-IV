import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { BienvenidoComponent } from "./componentes/bienvenido/bienvenido.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BienvenidoComponent, LoginComponent]
})
export class AppComponent {
  title = 'puntoDos';
}
