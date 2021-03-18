import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './accounts/auth-guard.service';
import { LoginComponent } from './accounts/login/login.component';
import { HomeComponent } from './home/home.component';
import { PostdicomComponent} from './postdicom/postdicom.component';
import { MyfilesComponent} from './myfiles/myfiles.component';
import { SharingComponent } from './sharing/sharing.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import { PedigreeComponent } from './pedigree/pedigree.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'myimages', component: PostdicomComponent },
  { path: 'myfiles', component: MyfilesComponent },
  { path: 'sharing', component: SharingComponent },
  { path: 'personalinfo', component: PersonalinfoComponent },
  { path: 'pedigree', component: PedigreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
