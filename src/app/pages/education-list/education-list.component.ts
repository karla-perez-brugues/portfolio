import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Education} from '../../core/models/education.model';
import {EducationService} from '../../core/services/education.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-education-list',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './education-list.component.html',
  styleUrl: './education-list.component.scss'
})
export class EducationListComponent implements OnInit {
  education$!: Observable<Education[]>;

  constructor(private educationService: EducationService) {}

  ngOnInit() {
    this.education$ = this.educationService.getEducation();
  }
}
