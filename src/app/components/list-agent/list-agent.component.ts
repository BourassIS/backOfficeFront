import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IAgent } from 'src/app/models/IAgent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.css']
})
export class ListAgentComponent {


  public loading: boolean = false;
  public agents: IAgent[] = [];
  public errorMessage: string | null = null;

  constructor(private router: Router, private agentService : AgentService) {}

  ngOnInit(): void {
    this.getAllAgentFromServer();
  }

  public getAllAgentFromServer(){
    this.loading=true;
    this.agentService.getAllAgents().subscribe((data) => {
      this.agents = data;
      console.log(data)
      this.loading=false;
    }, (error) => {
      this.errorMessage = error;
      this.loading=false;
    })
  }

  deleteAgent(id: string | undefined){
    if(id){
      this.agentService.deleteAgent(parseInt(id)).subscribe((data)=>{
        this.getAllAgentFromServer();
      },(error)=>{
        this.errorMessage=error;
      })
    }
  }
  
}
