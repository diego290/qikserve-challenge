import { RestaurantDetailsRepository } from '../ports/RestaurantDetailsRepository';
import RestaurantDetailsRepositoryImplementation from '../../infrastructure/repositories/RestaurantDetailsRepositoryImplementation';
import { RestaurantDetailsModel } from '../models/RestaurantDetailsModel';

export class RestaurantDetailsUseCases {
  repository: RestaurantDetailsRepository;

  constructor() {
    this.repository = new RestaurantDetailsRepositoryImplementation();
  }

  getRestaurantDetails(): Promise<RestaurantDetailsModel> {
    return this.repository.getRestaurantDetails();
  }
}
