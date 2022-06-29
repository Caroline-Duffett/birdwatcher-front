import { PipeTransform, Pipe } from '@angular/core';
import {Bird} from './bird';

@Pipe({
  name: 'nameFilter'
})




export class BirdNameFilterPipe implements PipeTransform {
  transform(birds: Bird[], searchText: string): Bird[] {
    if (!birds || !searchText) {
      return [];
    }

    return birds.filter(bird =>
      bird.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 || bird.scientificName.toLowerCase().indexOf(searchText.toLowerCase()) !== -1)
  }

}
