import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [],
})
export class ProgressComponent {
  progreso1: number = 20;
  progreso2: number = 80;

  get getProgreso1() {
    return `${this.progreso1}%`;
  }
  get getProgreso2() {
    return `${this.progreso2}%`;
  }
}
