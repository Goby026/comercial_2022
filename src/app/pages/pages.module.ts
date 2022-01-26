import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';

import { ComponentesModule } from '../components/componentes.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1Component } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { SharedModule } from '../shared/shared.module';
import { CotizacionComponent } from './cotizacion/cotizacion.component';
import { MarcaComponent } from './marca/marca.component';
import { FamiliaComponent } from './familia/familia.component';
import { PromesasComponent } from './promesas/promesas.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    CotizacionComponent,
    MarcaComponent,
    FamiliaComponent,
    PromesasComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ComponentesModule,
  ],
})
export class PagesModule {}
