import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { TransfersPageComponent } from './transfers-page/transfers-page.component';
import { OperationsHistoryPageComponent } from './operations-history-page/operations-history-page.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    ProfilPageComponent,
    TransfersPageComponent,
    OperationsHistoryPageComponent,
    HeaderComponent,
    OperationDetailComponent,
    TransferMoneyComponent,
    AddBeneficiaryComponent,
    BeneficiariesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
