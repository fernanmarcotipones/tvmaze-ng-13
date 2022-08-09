import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowListComponent } from './show-list.component';

@NgModule({
  declarations: [ShowListComponent],
  exports: [ShowListComponent],
  imports: [
    CommonModule,
  ],
})
export class ShowListModule { }
