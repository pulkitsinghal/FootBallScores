import { element } from 'protractor';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playerfilter'
})
export class TeamFilterPipe implements PipeTransform {

  transform(value: any, filter?: string): any {
    if (!filter) {
      return value;
    }else{
      return value.filter((data) => data.name.toLowerCase().includes(filter.toLowerCase()));
    }   
  }

}
