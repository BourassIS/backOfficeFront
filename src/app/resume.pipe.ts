import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resume'
})
export class ResumePipe implements PipeTransform {

  
  maLimit : number = 30;
  transform(value: any, limit?: number): any {
    
    
    if(!value){
      return null;
    }
    this.maLimit = (limit) ? limit : 30;
    return value.substr(0,this.maLimit) + '...';
  }

}
