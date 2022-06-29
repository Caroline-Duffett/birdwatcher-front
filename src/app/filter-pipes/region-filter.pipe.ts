import { PipeTransform, Pipe } from '@angular/core';
import {Bird} from '../bird';

@Pipe({
  name: 'regionFilter'
})

export class BirdRegionFilterPipe implements PipeTransform {
  transform(birds: Bird[], searchTextRegion: string): Bird[] {
    if (!birds || !searchTextRegion) {
      return [];
    }

    return birds.filter(bird =>
      bird.region.toLowerCase().indexOf(searchTextRegion.toLowerCase()) !== -1)
  }

}
