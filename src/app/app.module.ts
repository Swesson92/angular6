import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material/material.module';
import { MainNavComponent } from './home/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatProgressSpinnerModule, MatChipsModule } from '@angular/material';
import { ApplicationComponent } from './general/application.component';
import { AddApplicationComponent } from './general/add-application/add-application.component';
import { AddServiceComponent } from './general/add-service/add-service.component';
import { EditApplicationComponent } from './general/edit-application/edit-application.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './general/settings/settings.component';
import { HelpComponent } from './general/help/help.component';
import { LibraryComponent } from './library/library.component';
import { ServiceLibraryComponent } from './library/service-library/service-library.component';
import { ApplicationLibraryComponent } from './library/application-library/application-library.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ApplicationComponent,
    AddApplicationComponent,
    AddServiceComponent,
    EditApplicationComponent,
    HomeComponent,
    SettingsComponent,
    HelpComponent,
    LibraryComponent,
    ServiceLibraryComponent,
    ApplicationLibraryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
