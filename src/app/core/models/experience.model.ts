export class ExperienceModel {
  constructor(
    public id: number,
    public title: string,
    public company: string,
    public companyLogo: string,
    public description: string,
    public from: string,
    public to: string,
  ) {
  }
}
