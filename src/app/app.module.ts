import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppsettingsComponent } from './components/appsettings/appsettings.component';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from "@angular/common/http";
//service
import { AuthTokenService } from "./services/auth-token.service";
import { AuthGuard } from "./auth/auth-login.gaurd";

//
@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    AppsettingsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthTokenService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
