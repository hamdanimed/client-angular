import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OperationsHistoryPageComponent } from './operations-history-page/operations-history-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { TransfersPageComponent } from './transfers-page/transfers-page.component';
import { OperationDetailComponent } from './operation-detail/operation-detail.component';
import { TransferMoneyComponent } from './transfer-money/transfer-money.component';
import { AddBeneficiaryComponent } from './add-beneficiary/add-beneficiary.component';
import { BeneficiariesComponent } from './beneficiaries/beneficiaries.component';



const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo:'login' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'operations', component: OperationsHistoryPageComponent },
  { path: 'profil', component: ProfilPageComponent },
  { path: 'transfers', component: TransfersPageComponent },
  { path: 'operation-detail',component: OperationDetailComponent }
  { path: 'transferMoney', component: TransferMoneyComponent },
  { path: 'addBeneficiary', component: AddBeneficiaryComponent },
  { path: 'beneficiaries', component: BeneficiariesComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }