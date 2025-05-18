import {AnimeCharacterRole} from "../enums/AnimeCharacterRole";

export interface AnimeCharacterWithRole {
  id: string;
  firstName: string;
  lastName: string;
  pictureUrl: string;
  role: AnimeCharacterRole;
}
