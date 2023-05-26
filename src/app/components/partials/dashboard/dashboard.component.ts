import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {





  constructor(private router: Router) {}

  
  addAgent(){
    this.router.navigate(['/dash/agent/add']);
  }

  listAgent(){
    this.router.navigate(['/dash/list']);
  }

}

