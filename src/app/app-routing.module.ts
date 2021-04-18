import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {NewStageComponent} from './board-user/new-stage/new-stage.component';
import {FooterComponent} from './home/footer/footer.component';
import {UploadComponent} from './board-user/upload/upload.component';
import {ListStageComponent} from './board-moderator/list-stage/list-stage.component';
import {BoardRapporteurComponent} from './board-rapporteur/board-rapporteur.component';
import {NotesComponent} from './board-rapporteur/notes/notes.component';
import {NotePFEComponent} from './board-user/note-pfe/note-pfe.component';
import {PieComponent} from './board-admin/pie/pie.component';
import {ReclamationComponent} from './board-user/reclamation/reclamation.component';
import {PlagiatComponent} from './board-user/plagiat/plagiat.component';
import {BoardEncadrantComponent} from './board-encadrant/board-encadrant.component';
import {AllStageComponent} from './board-admin/all-stage/all-stage.component';
import {AfficheStagesComponent} from './board-admin/affiche-stages/affiche-stages.component';
import {RechercheComponent} from './board-admin/recherche/recherche.component';
import {ValidationComponent} from './board-admin/validation/validation.component';
import {AllAvisComponent} from './board-admin/all-avis/all-avis.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ForgetPasswordComponent} from './login/forget-password/forget-password.component';
import {FicheComponent} from './board-user/fiche/fiche.component';
import {FichesComponent} from './board-admin/fiches/fiches.component';
import {NottesComponent} from './board-encadrant/nottes/nottes.component';
import {ConventionsComponent} from './board-encadrant/conventions/conventions.component';
import {CvsComponent} from './board-rapporteur/cvs/cvs.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'convention', component: NewStageComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'dash', component: DashboardComponent },
  { path: 'plagiat', component: PlagiatComponent },
  { path: 'encadrant', component: BoardEncadrantComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'list1', component: ListStageComponent },
  { path: 'list2', component: AllStageComponent },
  { path: 'tout', component: AfficheStagesComponent },
  { path: 'validation', component: ValidationComponent },
  { path: 'recherche', component: RechercheComponent },
  { path: 'allAvis', component: AllAvisComponent },
  { path: 'frgt', component: ForgetPasswordComponent },
  { path: 'fiche', component: FicheComponent },
  { path: 'fiches', component: FichesComponent },

  {path:'noteti',component:NotePFEComponent},
  {path:'pie',component:PieComponent},
  { path: 'liststage', component: ListStageComponent},
  {path:'notes',component:NotesComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'nt', component: NottesComponent },
  { path: 'cv', component: ConventionsComponent },
  { path: 'avis', component: ReclamationComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  {path:'rapp',component: BoardRapporteurComponent},
  {path:'cvs',component: CvsComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
