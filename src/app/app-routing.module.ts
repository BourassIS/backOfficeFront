import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAgentComponent } from './components/list-agent/list-agent.component';
import { EditAgentComponent } from './components/edit-agent/edit-agent.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/partials/page-not-found/page-not-found.component';
import { AddAgentComponent } from './components/add-agent/add-agent.component';
import { DashboardComponent } from './components/partials/dashboard/dashboard.component';
import { DefaultComponent } from './components/default/default.component';
import { DetailsAgentComponent } from './components/details-agent/details-agent.component';

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  
  
    // {path: "", component: DefaultComponent},
    // {path: "agent/add", component: AddAgentComponent},
    // {path: "agent/list", component: ListAgentComponent},
    // {path: "agent/edit/:id", component: EditAgentComponent},
    // {path: "agent/details/:id", component: DetailsAgentComponent},
    

  {path: "dash" , component: DashboardComponent, children:[
    {path: "", component: DefaultComponent},
    {path: "agent/add", component: AddAgentComponent},
    {path: "list", component: ListAgentComponent},
    {path: "agent/edit/:id", component: EditAgentComponent},
    {path: "agent/:id", component: DetailsAgentComponent},
    
    
  ]
  },
  

 
  {path: "**", component: PageNotFoundComponent},
  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
