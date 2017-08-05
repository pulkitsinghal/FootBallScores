import { element } from 'protractor';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterComp'
})
export class CompetitionFilterPipe implements PipeTransform {

  transform(value: any, filter?: string): any {
    if (!filter) {
      return value;
    }else{
      return value.filter((data) => data.caption.toLowerCase().includes(filter.toLowerCase()));
    }   
  }

}
