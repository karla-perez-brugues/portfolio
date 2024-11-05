import {Component, OnInit} from '@angular/core';
import {ExperienceModel} from '../models/experience.model';
import {ExperienceService} from '../services/experience.service';
import {DatePipe, NgClass} from '@angular/common';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [
    NgClass,
    DatePipe,
  ],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss'
})
export class ExperienceListComponent implements OnInit {
  experiences!: ExperienceModel[];

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.experiences = this.experienceService.getExperiences();
  }

  protected isIdEven(number: number): boolean {
    return number % 2 == 0;
  }
}
