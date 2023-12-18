import { RouterModule, Routes } from "@angular/router";
import { SelectorPagesComponent } from "./pages/selector-pages/selector-pages.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'countries-selector-pages', component: SelectorPagesComponent },
      { path: '**', redirectTo: 'countries-selector-pages' }
    ]
  }
]

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class CountriesRoutingModule{

}
