import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [],
})
export class IncrementadorComponent implements OnInit {
  @Input() progreso: number = 0;

  @Output() valorSalida: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  cambiarValor(valor: number) {
    // en caso que el valor sea mayor a 100
    if (this.progreso >= 100 && valor > 0) {
      this.valorSalida.emit(100);
      this.progreso = 100;
      return;
    }

    // en caso que el valor sea menor a 0
    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0);
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }
}
