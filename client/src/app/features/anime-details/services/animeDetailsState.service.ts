import { AnimeDataService } from '../../../core/services/animeData.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AnimeDetails } from '../models/AnimeDetails';

@Injectable({
  providedIn: 'root'
})

export class AnimeStateService {
  data = new BehaviorSubject<AnimeDetails | undefined>(undefined);

  constructor(private animeDataService: AnimeDataService ) {}

  loadAnimeDetails(id: string | null){
    this.animeDataService.fetchAnimeDetails(id).subscribe(
      {
        next: response => {
          if(response == null){

             console.error('Received null or undefined');
          }

          this.data.next(response)
        },
      }
    )
  }

  observeAnimeDetailsState(){
    return this.data.asObservable();
  }
}


