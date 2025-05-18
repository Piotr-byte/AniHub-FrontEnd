import {Component, Input, NgIterable} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {EnumTextValuePipe} from "../../../../shared/pipes/enum-text-value.pipe";
import {AnimeRelation} from "../../models/AnimeRelation";
import {AnimeCharacterWithRole} from "../../models/AnimeCharacterWithRole";
import {Staff} from "../../models/Staff";

@Component({
  selector: 'app-custom-cards',
  imports: [CommonModule, RouterLink, EnumTextValuePipe],
  standalone: true,
  templateUrl: './custom-cards.component.html',
  styleUrls: ['./custom-cards.component.css']
})
export class CustomCardsComponent{
  constructor() {
  }

  @Input() headerTitle: string | undefined;
  @Input() arrayToLoop: AnimeRelation[] | AnimeCharacterWithRole[] | Staff[] | & NgIterable<any> | undefined ;
  @Input() picture: string = "";
  @Input() titleOrFirstName: string = "";
  @Input() lastName: string = "";
  @Input() subtitleEnum: Record<number,string> = {};
  @Input() subtitle: string = "";
  @Input() primaryMetadataEnum: Record<number,string> = {};
  @Input() primaryMetadata: string = "";
  @Input() secondaryMetadataEnum: Record<number,string> = {};
  @Input() secondaryMetadata: string = "";

}
