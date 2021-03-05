import { NgModule } from '@angular/core';
import { RouterModule, Routes ,CanActivate} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {
  AuthGuardService as AuthGuard
} from './BookService/auth-guard.service';

const routes: Routes = [
  {
    path:"",component:HomeComponent,canActivate: [AuthGuard]
  },
  {
    path:"bookDetail/:id",component:BookDetailComponent,canActivate: [AuthGuard]
  },
  {
    path:"Dashboard",component:DashboardComponent,canActivate: [AuthGuard]
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:"Home",component:HomeComponent,    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
