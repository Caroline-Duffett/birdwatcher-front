import { PipeTransform, Pipe } from '@angular/core';
import {Bird} from '../bird';

@Pipe({
  name: 'alphaOrder'
})

export class AlphabeticalOrderPipe implements PipeTransform {
  transform(birds: Bird[], field: string): Bird[] {
    birds.sort((a: any, b: any) => {
      if (a[field] < b[field]) {
        return -1;
      } else if (a[field] > b[field]) {
        return 1;
      } else {
        return 0;
      }
    });
    return birds;
  }
}
