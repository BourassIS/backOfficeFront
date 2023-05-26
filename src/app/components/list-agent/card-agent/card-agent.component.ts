import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IAgent } from 'src/app/models/IAgent';
import { AgentService } from 'src/app/services/agent.service';

@Component({
  selector: 'card-agent',
  templateUrl: './card-agent.component.html',
  styleUrls: ['./card-agent.component.css']
})
export class CardAgentComponent {

  @Input() agent: any;

  @Output() deleteAgentEvent = new EventEmitter<number>();


  constructor(private router: Router, private agentService : AgentService) { 
  }


 

  detailsBtn(){
    
    this.router.navigate([`dash/agent/${this.agent.id}`])

  }

  editAgentBtn(){
    this.router.navigate([`dash/agent/edit/${this.agent.id}`])
  }

  onDelete() {
    this.deleteAgentEvent.emit(this.agent.id);
  }

  
}
