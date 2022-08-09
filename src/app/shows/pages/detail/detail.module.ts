import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { detailReducers } from './state/detail.reducers';
import { DetailEffects } from './state/detail.effects';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('detail', detailReducers),
    EffectsModule.forFeature([DetailEffects]),
  ]
})
export class DetailModule { }
