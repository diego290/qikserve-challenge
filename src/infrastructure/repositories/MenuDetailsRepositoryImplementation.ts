import axios from 'axios';
import { APIError } from './errors/APIError';
import { MenuDetailsModel } from '../../domain/models/MenuDetailsModel';
import { MenuDetailsRepository } from '../../domain/ports/MenuDetailsRepository';

export default class MenuDetailsRepositoryImplementation implements MenuDetailsRepository {
  public async getMenuDetails(): Promise<MenuDetailsModel> {
    try {
      const { data } = await axios({
        method: 'get',
        url: `${import.meta.env.VITE_APP_API_URL}/menu`,
      });
      if (data) {
        return data;
      }
      throw new APIError(undefined, data);
    } catch (err: any) {
      throw MenuDetailsRepositoryImplementation.getError(err);
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
