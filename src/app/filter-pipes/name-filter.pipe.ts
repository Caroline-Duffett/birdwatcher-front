import { PipeTransform, Pipe } from '@angular/core';
import {Bird} from '../bird';

@Pipe({
  name: 'nameFilter'
})

export class BirdNameFilterPipe implements PipeTransform {
  transform(birds: Bird[], searchTextName: string): Bird[] {
    if (!birds || !searchTextName) {
      return [];
    }

    return birds.filter(bird =>
      bird.name.toLowerCase().indexOf(searchTextName.toLowerCase()) !== -1 || bird.scientificName.toLowerCase().indexOf(searchTextName.toLowerCase()) !== -1)
  }

}
