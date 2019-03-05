import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { BottomHeaderComponent } from './bottom-header/bottom-header.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AgentsComponent } from './agents/agents.component';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProjectsComponent } from './projects/projects.component';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';
import { PackageDetailsComponent } from './package-details/package-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    BottomHeaderComponent,
    PropertyListComponent,
    RegisterComponent,
    DashboardComponent,
    LoginComponent,
    AgentsComponent,
    AllPropertiesComponent,
    HomeComponent,
    FooterComponent,
    ProjectsComponent,
    SubmitPropertyComponent,
    PackageDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
