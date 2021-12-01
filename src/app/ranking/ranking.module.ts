import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RankingComponentRoutingModule } from './ranking-route.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { RankingComponent } from './ranking.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RankingComponentRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  declarations: [RankingComponent]
})
export class RankingModule {}
