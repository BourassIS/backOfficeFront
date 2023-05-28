import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IAgent } from 'src/app/models/IAgent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-add-agent',
  templateUrl: './add-agent.component.html',
  styleUrls: ['./add-agent.component.css']
})
export class AddAgentComponent implements OnInit {
  
  public loading: boolean =false;
  public agent:IAgent = {} as IAgent;
  public errorMessage : string | null = null;

  
  constructor(private agentService : AgentService, private router: Router) {}

  ngOnInit(): void {
    
  }
  
  createSubmit(){
    this.agentService.createAgent(this.agent).subscribe((data: any)=>{
      this.router.navigate([`/dash/list`]).then();
    }, (error) => {
      this.errorMessage=error;
      this.router.navigate(['/dash/agent/add']).then();
    });
  }
}