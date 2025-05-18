import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeCharacterRole } from '../enums/AnimeCharacterRole';
import {EnumTextValuePipe} from "../../../shared/pipes/enum-text-value.pipe";
import {VoiceActingLanguage} from "../enums/VoiceActingLanguage";
import {AnimeCharacterWithVoiceActor} from "../models/AnimeCharacterWithVoiceActor";
import {AnimeDataService} from "../../../core/services/animeData.service";
import {ActivatedRoute} from "@angular/router";
import {AnimeIdService} from "../services/animeId.service";


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, EnumTextValuePipe],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.scss'
})

export class CharactersComponent {
  constructor(private animeDataService: AnimeDataService, private route: ActivatedRoute,
              private animeIdService: AnimeIdService) {
  }

  animeCharacterWithVoiceActor: AnimeCharacterWithVoiceActor[] = [];
  animeId: string | null = " ";

  animeCharacterRole = AnimeCharacterRole;
  voiceActingLanguage = VoiceActingLanguage;

  ngOnInit(): void {
    this.animeId = this.animeIdService.getAnimeID();

    this.animeDataService.fetchAnimeCharactersWitchVoiceActor(this.animeId).subscribe(
      {
        next: response => {
          if (response == null) {
            console.error('Received null or undefined');
          } else {
            this.animeCharacterWithVoiceActor = response;
          }
        }
      }
    )
  }
}


