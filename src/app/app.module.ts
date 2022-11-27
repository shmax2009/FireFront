import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AnmeldenSeiteComponent} from './pages/anmelden-seite/anmelden-seite.component';
import {MainSeiteComponent} from './pages/main-seite/main-seite.component';
import {FormsModule} from "@angular/forms";
import {UserComponent} from './pages/main-seite/components/user/user.component';
import {LoginService} from "./core/services/login.service";
import {AuthInterceptorService} from "./core/auth-interceptor.service";
import { OutsideClickDirective } from './directives/outside-click.directive';

@NgModule({
  declarations: [
    AppComponent,
    AnmeldenSeiteComponent,
    MainSeiteComponent,
    UserComponent,
    OutsideClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoginService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
