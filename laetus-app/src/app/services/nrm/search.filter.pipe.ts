import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if(!items) return [];
    if(!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter( it => {
      let flag = false;
      if(it.name.toLowerCase().includes(searchText)) {
         flag = true;
      }
      if(it.company.toLowerCase().includes(searchText)) {
         flag = true;
      }
      return flag;
    });
   }
}