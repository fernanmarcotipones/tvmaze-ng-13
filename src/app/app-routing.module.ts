import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'shows', pathMatch: 'full' },
  {
    path: 'shows',
    loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
