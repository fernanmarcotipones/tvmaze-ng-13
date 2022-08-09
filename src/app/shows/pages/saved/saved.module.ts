import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SavedComponent } from './saved.component';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { ShowListModule } from 'src/app/shared/components/show-list/show-list.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { savedReducers } from './state/saved.reducers';
import { SavedEffects } from './state/saved.effects';

@NgModule({
  declarations: [SavedComponent],
  imports: [
    CommonModule,
    SearchBarModule,
    ShowListModule,
    StoreModule.forFeature('saved', savedReducers),
    EffectsModule.forFeature([SavedEffects]),
  ]
})
export class SavedModule { }
