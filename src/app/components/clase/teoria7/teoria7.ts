import { Component, effect, signal, WritableSignal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-teoria7',
  styleUrl: './teoria7.css',
  templateUrl: './teoria7.html',
})
export class Teoria7 {
  contador: WritableSignal<number> = signal<number>(0);
  contadorLectura = this.contador.asReadonly();

  miContadorOriginal = 0;

  // OBJETOS
  usuario:WritableSignal<Usuario> = signal<Usuario>({
    nombre: 'Pepe',
    edad: 34
  });

  constructor() {
    effect(() => {
      console.log('Contador original: ', this.miContadorOriginal);
      console.log('Contador signal: ', this.contador());
      console.log('Usuario: ', this.usuario());
    });
  }

  asignarValorSignal(){
    this.contador.set(10); // AHORA
  }
  asignarValorOriginal(){
    this.miContadorOriginal = 10; // ANTIGUAMENTE
  }

  incrementarContador() {
    this.contador.update(aux => aux +1);
  }
  incrementarContadorOriginal() {
    this.miContadorOriginal++; // ANTIGUAMENTE
  }

  cambiarNombre() {
    const newUsu = this.usuario();
    newUsu.nombre = 'Paco'; // MAL
  }
  cambiarNombreOK() {
    this.usuario.update(usu => ({
      ...usu,
      nombre: 'Paco',
      edad: 36
    })); // BIEN

  }

}

interface Usuario{
  nombre: string;
  edad: number;
}
