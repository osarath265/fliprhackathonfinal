import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';


const routes: Routes = [
  
  {path:'loginpage',component:LoginpageComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},
  { path: '', pathMatch: 'full', redirectTo: 'loginpage' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
