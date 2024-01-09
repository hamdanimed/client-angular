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

import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo:'login' },
  { path: 'home', component: HomePageComponent , canActivate: [AuthGuard]  },
  { path: 'login', component: LoginPageComponent },
  { path: 'operations', component: OperationsHistoryPageComponent , canActivate: [AuthGuard]  },
  { path: 'profil', component: ProfilPageComponent , canActivate: [AuthGuard]  },
  { path: 'transfers', component: TransfersPageComponent, canActivate: [AuthGuard]   },
  { path: 'operation-detail',component: OperationDetailComponent, canActivate: [AuthGuard]   },
  { path: 'transferMoney', component: TransferMoneyComponent, canActivate: [AuthGuard]   },
  { path: 'addBeneficiary', component: AddBeneficiaryComponent, canActivate: [AuthGuard]   },
  { path: 'beneficiaries', component: BeneficiariesComponent, canActivate: [AuthGuard]   },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }