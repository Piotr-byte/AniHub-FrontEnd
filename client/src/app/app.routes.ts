import { Routes } from '@angular/router';
import { RoutingTestComponent } from './core/routing-test/routing-test.component';
import {AnimeHomeSearchComponent} from "./features/anime-home-search/anime-home-search.component";
import {AnimeSearchResultComponent} from "./features/anime-home-search/anime-search-result/anime-search-result.component";
import {AnimeDetailsComponent} from "./features/anime-details/anime-details.component";
import {CharactersComponent} from "./features/anime-details/characters/characters.component";
import {OverviewComponent} from "./features/anime-details/overview/overview.component";
import {LoginComponent} from "./features/login/login.component";

export const routes: Routes = [
  { path: 'help', component: RoutingTestComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: AnimeHomeSearchComponent,
    children: [
      { path: 'search', component: AnimeSearchResultComponent }
    ]
  },
  { path: 'details/:id', component: AnimeDetailsComponent,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: "overview", component: OverviewComponent },
      { path: 'characters', component: CharactersComponent },
    ]
  }
];
