import axios from 'axios';
import { APIError } from './errors/APIError';
import { RestaurantDetailsModel } from '../../domain/models/RestaurantDetailsModel';
import { RestaurantDetailsRepository } from '../../domain/ports/RestaurantDetailsRepository';

export default class RestaurantDetailsRepositoryImplementation implements RestaurantDetailsRepository {
  public async getRestaurantDetails(): Promise<RestaurantDetailsModel> {
    try {
      const { data } = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_APP_API_URL}/venue/9`,
      });
      if (data) {
        return data;
      }
      throw new APIError(undefined, data);
    } catch (err: any) {
      throw RestaurantDetailsRepositoryImplementation.getError(err);
    }
  }

  private static getError(err: any) {
    if (err.response?.data) {
      return new APIError(undefined, err.response.data);
    } else {
      return new APIError(undefined, 'Unknown error occurred');
    }
  }
}
