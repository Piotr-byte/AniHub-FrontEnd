import {VoiceActingLanguage} from "../enums/VoiceActingLanguage";
import {AnimeCharacterWithRole} from "./AnimeCharacterWithRole";

export interface AnimeCharacterWithVoiceActor {
  animeCharacter: AnimeCharacterWithRole;
  voiceActor: VoiceActor;
}

export interface VoiceActor {
  id: string;
  displayName: string;
  pictureUrl: string;
  voiceActingLanguage: VoiceActingLanguage;
}
