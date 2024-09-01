export class UserModel {
  id: string = '';
  isActive: boolean = false;
  balance?: string;
  picture?: string;
  age?: number;
  name?: Name;
  company: string = '';
  email: string = '';
  address: string = '';
  tags: string[] = [];
  favoriteFruit: string = '';
}

export interface Name {
  first: string;
  last: string;
}