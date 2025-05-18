import {Component, SimpleChanges} from '@angular/core';
import {AnimeDataService} from "../../../core/services/animeData.service";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SearchResult} from "./models/SearchResult";
import {DatePipe, NgForOf} from "@angular/common";
import {EnumTextValuePipe} from "../../../shared/pipes/enum-text-value.pipe";
import {ProductionType} from "../../anime-details/enums/ProductionType";
import {AnimeStatus} from "../../anime-details/enums/AnimeStatus";

@Component({
  selector: 'app-anime-search-result',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink,
    DatePipe,
    EnumTextValuePipe
  ],
  templateUrl: './anime-search-result.component.html',
  styleUrl: './anime-search-result.component.scss'
})
export class AnimeSearchResultComponent {

  constructor(private animeData: AnimeDataService,
              private route: ActivatedRoute) {
  }

  productionTypeEnum = ProductionType;
  animeStatusEnum = AnimeStatus;
  searchText: string = "";
  searchResult: SearchResult[] | undefined;

  ngOnInit(){
    this.route.queryParams.subscribe((params ) => {
      this.searchText = params['searchTerm'];

      this.animeData.searchAnime(this.searchText).subscribe({
          next: response => {
            if(response == null){
              console.error('Received null or undefined');
            }
            this.searchResult = response;
          },
        },
      )
    });
  }

  getPosterUrl(result: any): string {
    return result.posterUrl || '/placeHolderPoster.png';
  }
}
