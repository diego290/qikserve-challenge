import { RestaurantDetailsModel } from '../models/RestaurantDetailsModel';

export interface RestaurantDetailsRepository {
  getRestaurantDetails(): Promise<RestaurantDetailsModel>
}
