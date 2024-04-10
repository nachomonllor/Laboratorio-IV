import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Mi nuevo titulo';
    /*
    1- (app.component.html) Realizar:
    Una aplicación que se le ingresen dos edades en dos cuadro de textos
    edadUno, EdadDos
    mostrar el promedio y la suma en dos cuadros de textos nuevos
    botones "calcular" y "limpiar cuadros de textos"
    */

    // Cambia el tipo de las variables a string
    edadUno: string = '';
    edadDos: string = '';
    suma: string = '';
    promedio: string = '';
  
    calcular() {
      const numEdadUno = Number(this.edadUno);
      const numEdadDos = Number(this.edadDos);
      const suma = numEdadUno + numEdadDos;
      const promedio = suma / 2;
  
      this.suma = suma.toString();
      this.promedio = promedio.toString();
    }
  
    limpiar() {
      this.edadUno = '';
      this.edadDos = '';
      this.suma = '';
      this.promedio = '';
    }

}
