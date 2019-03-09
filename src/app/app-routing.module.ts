import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { NotFoundComponent } from './login/not-found/not-found.component';
import { UserComponent } from "./components/user/user.component";
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    NotFoundComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
