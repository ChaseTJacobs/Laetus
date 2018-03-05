import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, field: string[]): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      let flag = false;
      for(var i = 0; i < field.length; i++){
        if(it[field[i]] == undefined || it[field[i]] == null) {
          
        } else {
          if(it[field[i]].toLowerCase().includes(searchText)) {
            flag = true;
          }
        }
      }
      return flag;
    });
   }
}