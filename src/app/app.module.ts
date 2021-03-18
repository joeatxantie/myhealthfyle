import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { LoginComponent } from './accounts/login/login.component';
import { HomeComponent } from './home/home.component';
import { JwtModule } from '@auth0/angular-jwt';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { NotifierModule } from 'angular-notifier';
import { ChartsModule } from 'ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardFiltersComponent } from './shared/dashboard-filters/dashboard-filters.component';
import { CalendarComponent } from './shared/calendar/calendar.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PostdicomComponent } from './postdicom/postdicom.component';
import { MyfilesComponent } from './myfiles/myfiles.component';
import { SharingComponent } from './sharing/sharing.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { PedigreeComponent } from './pedigree/pedigree.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UsersComponent,
    NavComponent,
    DashboardFiltersComponent,
    CalendarComponent,
    DashboardComponent,
    FooterComponent,
    PostdicomComponent,
    MyfilesComponent,
    SharingComponent,
    PersonalinfoComponent,
    PedigreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule,
    NotifierModule,
    ChartsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
