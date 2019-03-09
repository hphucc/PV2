import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD


=======
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//
>>>>>>> d70c0fd1a6a4becd6548ec963c16d2c39630d9ce
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
<<<<<<< HEAD
import { ReactiveFormsModule, FormsModule } from '@angular/forms';






=======
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from "@angular/common/http";
//service
import { AuthTokenService } from "./services/auth-token.service";
import { AuthGuard } from "./auth/auth-login.gaurd";

//
>>>>>>> d70c0fd1a6a4becd6548ec963c16d2c39630d9ce
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
<<<<<<< HEAD
    AppsettingsComponent
=======
    AppsettingsComponent,
    UserComponent,
>>>>>>> d70c0fd1a6a4becd6548ec963c16d2c39630d9ce
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    FormsModule
  ],
  providers: [],
=======
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthTokenService,
    AuthGuard
  ],
>>>>>>> d70c0fd1a6a4becd6548ec963c16d2c39630d9ce
  bootstrap: [AppComponent]
})
export class AppModule { }
