import { Routes } from '@angular/router';
import {HeroComponent} from './hero/hero.component';
import {ExperienceComponent} from './experience/experience.component';

export const routes: Routes = [
  { path: '', component: HeroComponent},
  { path: 'experience', component: ExperienceComponent},
];
