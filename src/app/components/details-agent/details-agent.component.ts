import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IAgent } from 'src/app/models/IAgent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'app-details-agent',
  templateUrl: './details-agent.component.html',
  styleUrls: ['./details-agent.component.css']
})
export class DetailsAgentComponent implements OnInit {
  public loading: boolean =false;
  public id: string | null = null;
  public agent:IAgent = {} as IAgent;
  public errorMessage : string | null = null;

  
  constructor(private activatedRoute : ActivatedRoute, private agentService : AgentService){

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

  public isNotEmpty(){
    return Object.keys(this.agent).length > 0;
  }


}
