import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { TransfersPageComponent } from './transfers-page/transfers-page.component';
import { OperationsHistoryPageComponent } from './operations-history-page/operations-history-page.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ProfilPageComponent,
    TransfersPageComponent,
    OperationsHistoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
