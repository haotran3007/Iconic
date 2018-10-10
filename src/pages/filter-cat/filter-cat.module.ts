import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterCatPage } from './filter-cat';

@NgModule({
  declarations: [
    FilterCatPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterCatPage),
  ],
})
export class FilterCatPageModule {}
