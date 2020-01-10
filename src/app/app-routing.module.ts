import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpSearchComponent } from './emp-search/emp-search.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: 'search', component: EmpSearchComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
