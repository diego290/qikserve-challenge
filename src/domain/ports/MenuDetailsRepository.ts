import { MenuDetailsModel } from '../models/MenuDetailsModel';

export interface MenuDetailsRepository {
  getMenuDetails(): Promise<MenuDetailsModel>
}
