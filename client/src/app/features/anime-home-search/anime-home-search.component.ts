import { Component } from '@angular/core';
import {CustomButtonComponent} from "../../shared/custom-button/custom-button.component";
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-anime-home-search',
  standalone: true,
  imports: [
    CustomButtonComponent,
    RouterLink,
    FormsModule,
    RouterOutlet,
  ],
  templateUrl: './anime-home-search.component.html',
  styleUrl: './anime-home-search.component.scss',
})

export class AnimeHomeSearchComponent {
  constructor( private router: Router) {
  }

  searchText: string = "";

  goToResult() {
    if (this.searchText !== "") {
      this.router.navigate(['search'], { queryParams: { searchTerm: this.searchText } });
    } else {
      this.router.navigate(['']);
    }
  }
}
