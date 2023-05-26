import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { EditAgentComponent } from './components/edit-agent/edit-agent.component';
import { ListAgentComponent } from './components/list-agent/list-agent.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';

import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { DashboardComponent } from './components/partials/dashboard/dashboard.component';
import { DetailsAgentComponent } from './components/details-agent/details-agent.component';
import { DefaultComponent } from './components/default/default.component';
import { CardAgentComponent } from './components/list-agent/card-agent/card-agent.component';
import { ResumePipe } from './resume.pipe';
import { SpinnerComponent } from './components/spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAgentComponent,
    EditAgentComponent,
    ListAgentComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    DashboardComponent,
    DetailsAgentComponent,
    DefaultComponent,
    CardAgentComponent,
    ResumePipe,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
