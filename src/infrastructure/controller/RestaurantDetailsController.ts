import { RestaurantDetailsModel } from '../../domain/models/RestaurantDetailsModel';
import { RestaurantDetailsUseCases } from '../../domain/useCases/RestaurantDetailsUseCases';

export default class RestaurantDetailsController {
  static async getRestaurantDetails(): Promise<RestaurantDetailsModel> {
    const restaurantDetails = new RestaurantDetailsUseCases();

    return await restaurantDetails.getRestaurantDetails();
  }
}
