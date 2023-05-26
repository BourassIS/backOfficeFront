import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { IAgent } from '../models/IAgent';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private serverUrl : string = `http://localhost:9000` ;

  constructor(private httpClient :HttpClient){}

  //GET All Agents
  public getAllAgents(): Observable<IAgent[]> {
    let dataUrl: string = `${this.serverUrl}/agents`;
    return this.httpClient.get<IAgent[]>(dataUrl).pipe(catchError(this.handleError));
  }


  // GET Single Agent
  public getAgent(id: number): Observable<IAgent>{
    let dataUrl: string = `${this.serverUrl}/agents/${id}`;
    return this.httpClient.get<IAgent>(dataUrl).pipe(catchError(this.handleError));

  }

  // Create a agent
  public createAgent(agent : IAgent) : Observable<IAgent>{
    let dataUrl: string = `${this.serverUrl}/agents`;
    return this.httpClient.post<IAgent>(dataUrl, agent).pipe(catchError(this.handleError));;
  }

  // Update a agent
  public updateAgent(agent : IAgent, id: number) : Observable<IAgent>{
    let dataUrl: string = `${this.serverUrl}/agents/${id}`;
    return this.httpClient.put<IAgent>(dataUrl, agent).pipe(catchError(this.handleError));;
  }


  // Delete a agent
  public deleteAgent(id: number) : Observable<{}>{
    let dataUrl: string = `${this.serverUrl}/agents/${id}`;
    return this.httpClient.delete<{}>(dataUrl).pipe(catchError(this.handleError));;
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
