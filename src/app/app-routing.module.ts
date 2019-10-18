import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddApplicationComponent } from './general/add-application/add-application.component';
import { AddServiceComponent } from './general/add-service/add-service.component';
import { EditApplicationComponent } from './general/edit-application/edit-application.component';
import { HelpComponent } from './general/help/help.component';
import { SettingsComponent } from './general/settings/settings.component';
import { ApplicationLibraryComponent } from './library/application-library/application-library.component';
import { ServiceLibraryComponent } from './library/service-library/service-library.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'add-application', component: AddApplicationComponent},
  { path: 'add-service', component: AddServiceComponent},
  { path: 'edit-application', component: EditApplicationComponent},
  { path: 'help', component: HelpComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'application-library', component: ApplicationLibraryComponent},
  { path: 'service-library', component: ServiceLibraryComponent},
  { path: 'home', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
