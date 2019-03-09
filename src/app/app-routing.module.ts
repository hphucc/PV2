import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login/login.component';
import { NotFoundComponent } from './login/not-found/not-found.component';
<<<<<<< HEAD
=======
import { UserComponent } from "./components/user/user.component";
import { AdminComponent } from './admin/admin.component';
>>>>>>> d70c0fd1a6a4becd6548ec963c16d2c39630d9ce
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
<<<<<<< HEAD
    // component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
=======
  },
  {
    path: 'login',
    component: UserComponent
  },
  {
    path: 'admin',
    component: AdminComponent
>>>>>>> d70c0fd1a6a4becd6548ec963c16d2c39630d9ce
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
