import { AnimeDetails } from "./models/AnimeDetails";
import { AnimeStateService } from "./services/animeDetailsState.service";

export class AnimeDetailsBase {
  animeDetails: AnimeDetails | undefined;

  constructor(protected animeStateService: AnimeStateService) {}

  getAnimeDetails(){
    this.animeStateService.observeAnimeDetailsState().subscribe(
      {
        next: response => {
          this.animeDetails = response;
        }
      }
    )
  }
}
