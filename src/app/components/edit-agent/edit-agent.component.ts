import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAgent } from 'src/app/models/IAgent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-edit-agent',
  templateUrl: './edit-agent.component.html',
  styleUrls: ['./edit-agent.component.css']
})
export class EditAgentComponent implements OnInit {

  public loading: boolean =false;
  public id: string | null = null;
  public agent:IAgent = {} as IAgent;
  public errorMessage : string | null = null;

  constructor(private activatedRoute : ActivatedRoute, private agentService : AgentService, private router : Router){

}
ngOnInit(): void {
  this.activatedRoute.paramMap.subscribe((param)=>{
    this.id =param.get('id');
  });
  if(this.id){
    this.loading=true;
    this.agentService.getAgent(parseInt(this.id)).subscribe((data)=>{
    this.agent = data;
    this.loading = false;
    }, (error) => {
    this.errorMessage = error;
    this.loading = false;
    })
  }
}


public SubmitUpdate(){
  if(this.id){
    this.agentService.updateAgent(this.agent, parseInt(this.id)).subscribe((data)=>{
      this.router.navigate([`/dash/list`]).then();
    }, (error) => {
      this.errorMessage=error;
      this.router.navigate(["/dash/agent/edit/:id"]).then();
    });
  }

}
}
