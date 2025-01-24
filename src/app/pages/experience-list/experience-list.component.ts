import {Component, OnInit} from '@angular/core';
import {Experience} from '../../core/models/experience.model';
import {ExperienceService} from '../../core/services/experience.service';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-experience-list',
  standalone: true,
  imports: [
    AsyncPipe,
  ],
  templateUrl: './experience-list.component.html',
  styleUrl: './experience-list.component.scss'
})
export class ExperienceListComponent implements OnInit {
  experiences$!: Observable<Experience[]>;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    // TODO: sort by id desc
    this.experiences$ = this.experienceService.getExperiences();
  }

  protected isIdEven(number: number): boolean {
    return number % 2 == 0;
  }
}
