import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycustom'
})
export class MycustomPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(' ','_');
  }

}
