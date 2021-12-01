import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioComponentRoutingModule } from './inicio-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { InicioComponent } from './inicio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioComponentRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [InicioComponent]
})
export class InicioModule {}
