import {ProductionType} from "../../../anime-details/enums/ProductionType";
import {AnimeStatus} from "../../../anime-details/enums/AnimeStatus";

export interface SearchResult {
  id: string;
  title: string;
  posterUrl?: string;
  productionType: ProductionType;
  status: AnimeStatus;
  episodesCount?: number;
  airDate?: Date;
}
