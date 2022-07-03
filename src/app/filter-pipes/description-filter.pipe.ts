import { PipeTransform, Pipe } from '@angular/core';
import {Bird} from '../bird';

@Pipe({
  name: 'descriptionFilter'
})

export class BirdDescriptionFilterPipe implements PipeTransform {
  transform(birds: Bird[], searchTextDescription: string): Bird[] {
    if (!birds || !searchTextDescription) {
      return [];
    }

    return birds.filter(bird =>
      bird.description.toLowerCase().indexOf(searchTextDescription.toLowerCase()) !== -1)
  }

}
