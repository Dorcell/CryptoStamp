/// Object model recieved from server
export class UserDTO {
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

/// Model for display
export interface UserRow {
  id: string;
  isActive?: boolean;
  balance?: string;
  picture?: string;
  age?: number;
  firstName: string;
  lastName: string;
  company?: string;
  email?: string;
  address?: string;
  tags?: string[];
  favoriteFruit?: string;
}

export interface Name {
  first: string;
  last: string;
}