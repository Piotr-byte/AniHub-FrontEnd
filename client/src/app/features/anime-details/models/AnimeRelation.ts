import {AnimeRelationType} from "../enums/AnimeRelationType";
import {ProductionType} from "../enums/ProductionType";

export interface AnimeRelation {
  relatedAnimeId: string;
  relatedAnimeTitle: string;
  relationType: AnimeRelationType;
  pictureUrl: string;
  relatedAnimeProductionType: ProductionType;
}
