import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { OperationsHistoryPageComponent } from './operations-history-page/operations-history-page.component';
import { ProfilPageComponent } from './profil-page/profil-page.component';
import { TransfersPageComponent } from './transfers-page/transfers-page.component';

const routes: Routes = [
  { path:'',pathMatch:'full',redirectTo:'login' },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'operations', component: OperationsHistoryPageComponent },
  { path: 'profil', component: ProfilPageComponent },
  { path: 'transfers', component: TransfersPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }