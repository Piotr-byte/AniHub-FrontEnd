import {HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import {SearchResult} from "../../features/anime-home-search/anime-search-result/models/SearchResult";
import {AnimeDetails} from "../../features/anime-details/models/AnimeDetails";
import {AnimeCharacterWithVoiceActor} from "../../features/anime-details/models/AnimeCharacterWithVoiceActor";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})

export class AnimeDataService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }


  fetchAnimeDetails(id: string | null){
    return this.http.get<AnimeDetails>(`${this.apiUrl}/api/Anime/${id}/details`);
  }

  fetchAnimeCharactersWitchVoiceActor(id: string | null){
    return this.http.get<AnimeCharacterWithVoiceActor[]>(`${this.apiUrl}/api/Anime/${id}/characters`);
  }

  searchAnime(searchText: string) {
    const params = new HttpParams().set('searchText', searchText);
    return this.http.get<SearchResult[]>(`${this.apiUrl}/api/Anime/search`, { params });
  }
}
