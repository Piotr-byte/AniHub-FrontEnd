import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeIdService {

  constructor() { }

  animeId: string | null = " ";

  setAnimeId(id:string | null){
    this.animeId = id;
  }

  getAnimeID(){
    return this.animeId;
  }
}
