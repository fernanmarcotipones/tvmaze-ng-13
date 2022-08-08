import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { ShowListModule } from 'src/app/shared/components/show-list/show-list.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { showReducer } from 'src/app/shared/states/show/show.reducer';
import { ShowEffects } from 'src/app/shared/states/show/show.effects';
@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShowListModule,
    StoreModule.forFeature('shows', showReducer),
    EffectsModule.forFeature([ShowEffects]),
  ]
})
export class SearchModule { }
