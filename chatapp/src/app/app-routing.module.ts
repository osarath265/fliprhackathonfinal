import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';


const routes: Routes = [
  
  {path:'loginpage',component:LoginpageComponent},
  { path: '', pathMatch: 'full', redirectTo:'loginpage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
