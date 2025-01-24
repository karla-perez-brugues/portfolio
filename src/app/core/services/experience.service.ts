import {ExperienceModel} from '../models/experience.model';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private experiences: ExperienceModel[] = [
    new ExperienceModel(
      1,
      'Développeuse Full-Stack',
      'Dayuse',
      'logo-dayuse.png',
      'Refonte du tunnel de réservation des chambres d’hôtel afin d’améliorer le taux de conversion et refonte du modèle de données interne pour le rapprocher du modèle hôtelier.<br><br>' +
      '- Refonte de l’API de gestion des réservations<br>' +
      '- Modélisation d’une nouvelle base de données<br>' +
      '- Développement de fonctionnalités<br>' +
      '- Maintenance opérationnelle et correction de bugs<br>' +
      '- Déploiement de releases et de hotfix avec Git Flow<br>' +
      '- Rédaction de tests unitaires',
      'septembre 2022',
      'août 2024'
    ),
    new ExperienceModel(
      2,
      'Développeuse Full-Stack',
      'Enedis',
      'logo-enedis.png',
      'Conception et développement d’un outil de suivi de chantier pour la mise en service d\'un parc d’organes de manœuvre télécommandés.<br><br>' +
      '- Modélisation de la base de données<br>' +
      '- Conception de l’architecture de l’outil<br>' +
      '- Conception d’interfaces utilisateur<br>' +
      '- Suivi et gestion de l’avancée du projet avec GitLab<br>' +
      '- Animation et coordination de points réguliers avec les porteurs de projet<br>' +
      '- Développement de fonctionnalités et correction de bugs',
      'septembre 2020',
      'août 2022'
    ),
  ];

  getExperiences(): ExperienceModel[] {
    return [...this.experiences];
  }
}
