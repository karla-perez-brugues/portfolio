import {Experience} from '../models/experience.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiencesUrl = './data/experiences.json';

  private constructor(
    private http: HttpClient,
  ) {}

  getExperiences(): Observable<Experience[]> {
    return this.http.get<Experience[]>(this.experiencesUrl);
  }
}
