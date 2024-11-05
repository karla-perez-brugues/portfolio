import { Routes } from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {ExperienceListComponent} from './experience-list/experience-list.component';

export const routes: Routes = [
  { path: '', component: HeroComponent},
  { path: 'experience', component: ExperienceListComponent},
];
