import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeDetailsBase } from './AnimeDetailsBase';
import { AnimeStateService } from './services/animeDetailsState.service';
import { CustomButtonComponent } from '../../shared/custom-button/custom-button.component';
import {AnimeIdService} from "./services/animeId.service";

@Component({
  selector: 'app-anime-details',
  standalone: true,
  imports: [CommonModule, CustomButtonComponent, RouterOutlet, RouterLink],
  templateUrl: './anime-details.component.html',
  styleUrl:'./anime-details.component.scss'
})

export class AnimeDetailsComponent extends AnimeDetailsBase {
  constructor(animeStateService: AnimeStateService, private route: ActivatedRoute,
              private animeIdService: AnimeIdService) {
    super(animeStateService);
  }

  animeId: string |null = "";

  ngOnInit(): void {
    this.route.paramMap.subscribe(param   => {
      this.animeId = param.get('id');
    })
    this.animeIdService.setAnimeId(this.animeId);
    this.animeStateService.loadAnimeDetails(this.animeId);
    this.getAnimeDetails();
  }
}
