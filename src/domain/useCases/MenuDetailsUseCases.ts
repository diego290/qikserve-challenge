import { MenuDetailsRepository } from '../ports/MenuDetailsRepository';
import MenuDetailsRepositoryImplementation from '../../infrastructure/repositories/MenuDetailsRepositoryImplementation';
import { MenuDetailsModel } from '../models/MenuDetailsModel';

export class MenuDetailsUseCases {
  repository: MenuDetailsRepository;

  constructor() {
    this.repository = new MenuDetailsRepositoryImplementation();
  }

  getMenuDetails(): Promise<MenuDetailsModel> {
    return this.repository.getMenuDetails();
  }
}
