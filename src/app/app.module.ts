import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// @ts-ignore
import { MaterialModule } from '@angular/material';

import {MatFormFieldModule} from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { ProfileComponent } from './profile/profile.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { ReactiveFormsModule} from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { NewStageComponent } from './board-user/new-stage/new-stage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CmpltComponent } from './home/cmplt/cmplt.component';
import { FooterComponent } from './home/footer/footer.component';
import { UploadComponent } from './board-user/upload/upload.component';
import { ListStageComponent } from './board-moderator/list-stage/list-stage.component';
import { TestComponent } from './test/test.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {MatStepperModule} from '@angular/material/stepper';
import {WebcamModule} from 'ngx-webcam';
import {DialogModule} from 'primeng/dialog';
import { AllStageComponent } from './board-admin/all-stage/all-stage.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {AccordionModule} from 'primeng/accordion';
import {TableModule} from 'primeng/table';
import {ToolbarModule} from 'primeng/toolbar';
import { BoardRapporteurComponent } from './board-rapporteur/board-rapporteur.component';
import { NotesComponent } from './board-rapporteur/notes/notes.component';
import { NotePFEComponent } from './board-user/note-pfe/note-pfe.component';
import { PieComponent } from './board-admin/pie/pie.component';
import {ChartsModule} from 'ng2-charts';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import { ReclamationComponent } from './board-user/reclamation/reclamation.component';
import { PlagiatComponent } from './board-user/plagiat/plagiat.component';
import { BoardEncadrantComponent } from './board-encadrant/board-encadrant.component';
import { NottesComponent } from './board-encadrant/nottes/nottes.component';
import { AfficheStagesComponent } from './board-admin/affiche-stages/affiche-stages.component';
import { ValidationComponent } from './board-admin/validation/validation.component';
import { RechercheComponent } from './board-admin/recherche/recherche.component';
import { AllAvisComponent } from './board-admin/all-avis/all-avis.component';
import {EncrDecrService} from './_services/encr-decr.service';
import { ModuleWithProviders } from "@angular/core";
//import { MAT_LABEL_GLOBAL_OPTIONS, MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTreeModule } from '@angular/material/tree';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {FileUploadModule} from 'primeng/fileupload';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import {ProgressBarModule} from 'primeng/progressbar';
import {SliderModule} from 'primeng/slider';
import {ContextMenuModule} from 'primeng/contextmenu';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {PanelModule} from 'primeng/panel';
import {CheckboxModule} from 'primeng/checkbox';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {DropdownModule} from 'primeng/dropdown';
import {CalendarModule} from 'primeng/calendar';
import {InputNumberModule} from 'primeng/inputnumber';
import {ChipsModule} from 'primeng/chips';
import {InputMaskModule} from 'primeng/inputmask';
import {FieldsetModule} from 'primeng/fieldset';
import {TabViewModule} from 'primeng/tabview';
import {ChartModule} from 'primeng/chart';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ForgetPasswordComponent} from './login/forget-password/forget-password.component';
import { FicheComponent } from './board-user/fiche/fiche.component';
import { FichesComponent } from './board-admin/fiches/fiches.component';
import { ConventionsComponent } from './board-encadrant/conventions/conventions.component';
import { CvsComponent } from './board-rapporteur/cvs/cvs.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    RegisterComponent,
    HomeComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardModeratorComponent,
    ProfileComponent,
    NewStageComponent,
    CmpltComponent,
    FooterComponent,
    UploadComponent,
    ListStageComponent,
    TestComponent,
    AllStageComponent,
    BoardRapporteurComponent,
    NotesComponent,
    NotePFEComponent,
    PieComponent,
    ReclamationComponent,
    PlagiatComponent,
    BoardEncadrantComponent,
    NottesComponent,
    AfficheStagesComponent,
    ValidationComponent,
    RechercheComponent,
    AllAvisComponent,
    DashboardComponent,
    FicheComponent,
    FichesComponent,
    ConventionsComponent,
    CvsComponent,



    ],
    imports: [
        RatingModule,
        CardModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ButtonModule,
        TableModule,
        AccordionModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSelectModule,
        MatSidenavModule,
        MatMenuModule,
        MatListModule,
        MatToolbarModule,
        MatIconModule,
        //  RxReactiveFormsModule,
        ConfirmDialogModule,
        ToolbarModule,
        FileUploadModule,
        HttpClientModule,
        TooltipModule,
        CardModule,
        ProgressBarModule,
        DialogModule,
        ContextMenuModule,
        SliderModule,
        BrowserModule,
        AppRoutingModule,
        AccordionModule,
        BrowserAnimationsModule,
        InputTextModule,
        CheckboxModule,
        ButtonModule,
        FormsModule,
        TableModule,
        ToastModule,
        ButtonModule,
        PanelModule,
        TabViewModule,
        InputTextModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        InputMaskModule,
        InputNumberModule,
        DropdownModule,
        InputTextareaModule,
        FieldsetModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatGridListModule,
        MatInputModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        ChartsModule,
        MatTabsModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule, BrowserAnimationsModule, MatTabsModule, MatFormFieldModule, MatProgressSpinnerModule,
        AppRoutingModule, FormsModule, HttpClientModule, MatButtonModule, MatInputModule,
        ReactiveFormsModule, MatSelectModule, MatRadioModule, MatIconModule, MatDatepickerModule, MatToolbarModule, ScrollPanelModule, MatStepperModule, WebcamModule, DialogModule, MatPaginatorModule, AccordionModule, TableModule, ToolbarModule, MatAutocompleteModule, MatSlideToggleModule, ChartModule, NgbModule,
    ],
  providers: [authInterceptorProviders,EncrDecrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
