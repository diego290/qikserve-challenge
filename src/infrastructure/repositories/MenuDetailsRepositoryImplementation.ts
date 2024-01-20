import axios, { AxiosResponse } from 'axios';
import { ResponseModel } from './models/ResponseModel';
import { APIError } from './errors/APIError';
import { MenuDetailsModel } from '../../domain/models/MenuDetailsModel';
import { MenuDetailsRepository } from '../../domain/ports/MenuDetailsRepository';

export default class MenuDetailsRepositoryImplementation implements MenuDetailsRepository {
  public async getMenuDetails(): Promise<MenuDetailsModel> {
    try {
      const { data }: AxiosResponse<ResponseModel<MenuDetailsModel>> =
        await axios({
          method: 'get',
          url: `${import.meta.env.VITE_APP_API_URL}/menu-details`,
        });
      if (data.data) {
        return new MenuDetailsModel(data.data);
      }
      throw new APIError(undefined, data);
    } catch (err: any) {
      throw MenuDetailsRepositoryImplementation.getError(err);
    }
  }

  private static getError(err: any) {
    const error = new APIError(undefined, err.response.data);
    return error;
  }
}
