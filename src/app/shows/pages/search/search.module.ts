import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';
import { ShowListModule } from 'src/app/shared/components/show-list/show-list.module';
@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ShowListModule,
  ]
})
export class SearchModule { }
