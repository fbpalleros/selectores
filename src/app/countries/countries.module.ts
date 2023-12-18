import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorPagesComponent } from './pages/selector-pages/selector-pages.component';
import { CountriesRoutingModule } from './countries-routing.module';



@NgModule({
  declarations: [
    SelectorPagesComponent
  ],
  imports: [
    CommonModule,
    CountriesRoutingModule
  ]
})
export class CountriesModule { }
