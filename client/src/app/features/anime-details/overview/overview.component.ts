import { AnimeDetailsBase } from '../AnimeDetailsBase';
import { Component} from '@angular/core';
import { CustomCardsComponent } from './custom-cards/custom-cards.component';
import { AnimeStateService } from '../services/animeDetailsState.service';
import { CommonModule } from '@angular/common';
import { AnimeRelationType } from '../enums/AnimeRelationType';
import { AnimeCharacterRole } from '../enums/AnimeCharacterRole';
import { AnimeStaffPositionType } from '../enums/AnimeStaffPositionType';
import {ProductionType} from "../enums/ProductionType";


@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CustomCardsComponent, CommonModule],
  templateUrl: './overview.component.html',
})
export class OverviewComponent extends AnimeDetailsBase{
  constructor(animeStateService: AnimeStateService) {
      super(animeStateService);
    }

  staffPosition = AnimeStaffPositionType;
  productionTypeEnum = ProductionType;
  animeRelationTypeEnum = AnimeRelationType;
  animeCharacterRole = AnimeCharacterRole;

  ngOnInit(): void {
    this.getAnimeDetails();
  }

}
