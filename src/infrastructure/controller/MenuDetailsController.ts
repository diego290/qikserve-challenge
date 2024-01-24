import { MenuDetailsModel } from '../../domain/models/MenuDetailsModel';
import { MenuDetailsUseCases } from '../../domain/useCases/MenuDetailsUseCases';

export default class MenuDetailsController {
  static async getMenuDetails(): Promise<MenuDetailsModel> {
    const menuDetails = new MenuDetailsUseCases();

    return await menuDetails.getMenuDetails();
  }
}
