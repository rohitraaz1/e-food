import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AndheriComponent } from './andheri/andheri.component';
import { HomeComponent } from './home/home.component';
import { BandraComponent } from './bandra/bandra.component';
import { BorivaliComponent } from './borivali/borivali.component';
import { KandavaliComponent } from './kandavali/kandavali.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'andheri', component: AndheriComponent},
  {path: 'bandra', component: BandraComponent},
  {path: 'borivali', component: BorivaliComponent},
  {path: 'kandavali', component: KandavaliComponent},
  {path: 'login',component: LoginComponent},
  {path : 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
