import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowsRoutingModule } from './shows-routing.module';
import { ShowsComponent } from './shows.component';
import { DetailModule } from './pages/detail/detail.module';
import { SavedModule } from './pages/saved/saved.module';
import { SearchModule } from './pages/search/search.module';
import { MenuComponent } from './components/menu/menu.component';


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
  ]
})
export class ShowsModule { }
