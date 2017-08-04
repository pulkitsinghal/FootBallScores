import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(value: any, filter?: string): any {
    if (!filter) {
      return value;
    }else{
      return value.filter((data) => data.teamName.toLowerCase().includes(filter.toLowerCase()));
    }   
  }

}
