import { Routes } from '@angular/router';
import {HeroComponent} from './pages/hero/hero.component';
import {ExperienceListComponent} from './pages/experience-list/experience-list.component';

export const routes: Routes = [
  { path: '', component: HeroComponent},
  { path: 'experience', component: ExperienceListComponent},
];
