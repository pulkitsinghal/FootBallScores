import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rename'
})
export class RenamePipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(value === "Primeira Liga 2017/18"){
      return "Portuguese Liga 2017-18"
    } else if(value === "Eredivisie 2017/18"){
      return "Dutch League 2017-18"
    } else if(value === "Ligue 1 2017/18"){
      return "France Ligue 1 2017/18"
    } else if(value === "Primera Division 2017"){
      return "Spanish La Liga 2017/18"
    }
    return value;
  }
}
