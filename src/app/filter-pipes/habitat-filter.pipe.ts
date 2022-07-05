import { PipeTransform, Pipe } from '@angular/core';
import {Bird} from '../bird';

@Pipe({
  name: 'habitatFilter'
})

export class BirdHabitatFilterPipe implements PipeTransform {
  transform(birds: Bird[], searchTextHabitat: string): Bird[] {
    if (!birds || !searchTextHabitat) {
      return [];
    } else {
      return birds.filter(bird =>
        bird.habitat.toLowerCase().indexOf(searchTextHabitat.toLowerCase()) !== -1)
    }
  }
}
