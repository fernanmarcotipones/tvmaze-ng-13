import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { SavedComponent } from './pages/saved/saved.component';
import { SearchComponent } from './pages/search/search.component';
import { ShowsComponent } from './shows.component';

const routes: Routes = [
  {
    path: '',
    component: ShowsComponent,
    children: [
      { path: '', redirectTo: 'search', pathMatch: 'full' },
      { path: 'search', component: SearchComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: 'saved', component: SavedComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowsRoutingModule { }
