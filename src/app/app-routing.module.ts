import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AnmeldenSeiteComponent} from "./pages/anmelden-seite/anmelden-seite.component";
import {MainSeiteComponent} from "./pages/main-seite/main-seite.component";

const routes: Routes = [
  {path: "anmelden", component: AnmeldenSeiteComponent},
  {path: "", component: MainSeiteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
