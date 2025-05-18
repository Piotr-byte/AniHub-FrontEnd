import {AnimeStaffPositionType} from "../enums/AnimeStaffPositionType";

export interface Staff{
  staffId: string;
  displayName: string;
  pictureUrl?: string;
  positionType: AnimeStaffPositionType;
}
