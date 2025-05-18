import {ProductionType} from "../enums/ProductionType";
import {AnimeStatus} from "../enums/AnimeStatus";
import {AnimeCharacterWithRole} from "./AnimeCharacterWithRole";
import {AnimeThemeSong} from "./AnimeThemeSong";
import {AnimeRelation} from "./AnimeRelation";
import {Staff} from "./Staff";
import {StudioWithName} from "./StudioWithName";

export interface AnimeDetails {
  id: string;
  title: string;
  alternativeTitle: string;
  description: string;
  posterUrl: string;
  episodesCount: number;
  productionType: ProductionType;
  status: AnimeStatus;
  airDate: string;
  durationInMinutes?: number;
  themeSongs: AnimeThemeSong[];
  characters: AnimeCharacterWithRole[];
  studios: StudioWithName[];
  staff: Staff[];
  relatedAnime: AnimeRelation[];
}

