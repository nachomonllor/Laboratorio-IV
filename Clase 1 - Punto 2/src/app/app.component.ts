import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "./componentes/login/login.component";
import { BienvenidoComponent } from "./componentes/bienvenido/bienvenido.component";
import { ErrorComponent } from './componentes/error/error.component';

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
