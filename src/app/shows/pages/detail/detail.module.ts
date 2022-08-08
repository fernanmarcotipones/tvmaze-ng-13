import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { detailReducer } from 'src/app/shared/states/show/show.reducer';
import { ShowEffects } from 'src/app/shared/states/show/show.effects';

@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('detail', detailReducer),
    EffectsModule.forFeature([ShowEffects]),
  ]
})
export class DetailModule { }
