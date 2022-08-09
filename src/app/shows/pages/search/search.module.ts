import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { ShowListModule } from 'src/app/shared/components/show-list/show-list.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { searchReducers } from './state/search.reducers';
import { SearchEffects } from './state/search.effects';
import { SearchBarModule } from 'src/app/shared/components/search-bar/search-bar.module';
import { savedReducers } from '../saved/state/saved.reducers';
import { SavedEffects } from '../saved/state/saved.effects';
@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShowListModule,
    SearchBarModule,
    StoreModule.forFeature('shows', searchReducers),
    StoreModule.forFeature('saved', savedReducers),
    EffectsModule.forFeature([SearchEffects, SavedEffects]),
  ]
})
export class SearchModule { }
