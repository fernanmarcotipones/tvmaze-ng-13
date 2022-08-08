import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { DetailModule } from './pages/detail/detail.module';
import { SavedModule } from './pages/saved/saved.module';
import { SearchModule } from './pages/search/search.module';
import { MenuComponent } from './components/menu/menu.component';
import { StoreModule } from '@ngrx/store';
import { showReducer } from '../shared/states/show/show.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ShowEffects } from '../shared/states/show/show.effects';


@NgModule({
  declarations: [
    ShowsComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    ShowsRoutingModule,
    DetailModule,
    SavedModule,
    SearchModule,
    StoreModule.forFeature('shows', showReducer),
    EffectsModule.forFeature([ShowEffects]),
  ]
})
export class ShowsModule { }
