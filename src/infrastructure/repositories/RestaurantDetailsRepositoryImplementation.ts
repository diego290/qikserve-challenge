import axios, { AxiosResponse } from 'axios';
import { ResponseModel } from './models/ResponseModel';
import { APIError } from './errors/APIError';
import { RestaurantDetailsModel } from '../../domain/models/RestaurantDetailsModel';
import { RestaurantDetailsRepository } from '../../domain/ports/RestaurantDetailsRepository';

export default class RestaurantDetailsRepositoryImplementation implements RestaurantDetailsRepository {
  public async getRestaurantDetails(): Promise<RestaurantDetailsModel> {
    try {
      const { data }: AxiosResponse<ResponseModel<RestaurantDetailsModel>> =
        await axios({
          method: 'get',
          url: `${import.meta.env.VITE_APP_API_URL}/restaurant-details`,
        });
      if (data.data) {
        return new RestaurantDetailsModel(data.data);
      }
      throw new APIError(undefined, data);
    } catch (err: any) {
      throw RestaurantDetailsRepositoryImplementation.getError(err);
    }
  }

  private static getError(err: any) {
    const error = new APIError(undefined, err.response.data);
    return error;
  }
}
