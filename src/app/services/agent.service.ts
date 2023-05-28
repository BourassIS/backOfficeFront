//import { CookieService } from './cookie.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { IAgent } from '../models/IAgent';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private serverUrl : string = `http://localhost:8084` ;
  private authorization = this.cookieService.get('Authorization');

  constructor(private httpClient :HttpClient, private cookieService : CookieService){}

  //GET All Agents
  public getAllAgents(): Observable<IAgent[]> {
    let dataUrl: string = `${this.serverUrl}/api/v1/admin/list`;
    // console.log(this.authorization); 

    const headers = {
      'Authorization': `${this.authorization}`
    };
    return this.httpClient.get<IAgent[]>(dataUrl, {headers}).pipe(catchError(this.handleError));
  }




  // GET Single Agent
  public getAgent(id: number): Observable<IAgent>{
    const headers = {
      'Authorization': `${this.authorization}`
    };
    let dataUrl: string = `${this.serverUrl}/api/v1/admin/agent/${id}`;
    return this.httpClient.get<IAgent>(dataUrl, {headers}).pipe(catchError(this.handleError));

  }

  // Create a agent
  public createAgent(agent : IAgent) : Observable<IAgent>{
    const headers = {
      'Authorization': `${this.authorization}`
    };
    let dataUrl: string = `${this.serverUrl}/api/v1/admin/register`;
    return this.httpClient.post<IAgent>(dataUrl, agent, {headers}).pipe(catchError(this.handleError));;
  }

  // Update a agent
  public updateAgent(agent : IAgent, id: number) : Observable<IAgent>{
    const headers = {
      'Authorization': `${this.authorization}`
    };
    let dataUrl: string = `${this.serverUrl}/api/v1/admin/update/${id}`;
    return this.httpClient.put<IAgent>(dataUrl, agent, {headers}).pipe(catchError(this.handleError));;
  }


  // Delete a agent
  public deleteAgent(id: number) : Observable<{}>{
    const headers = {
      'Authorization': `${this.authorization}`
    };
    let dataUrl: string = `${this.serverUrl}/api/v1/admin/delete/${id}`;
    return this.httpClient.delete<{}>(dataUrl, {headers}).pipe(catchError(this.handleError));;
  }
 

 
 //Error Handling
  public handleError(error: HttpErrorResponse){
    let errorMessage: string = '';
    if(error.error instanceof ErrorEvent) {
      // client error
      errorMessage = `Error : ${error.error.message}`
    } else {
      // server error
      errorMessage = `Status : ${error.status} \n Message: ${error.message}`
    }
    return throwError(errorMessage);
  }
  
}
