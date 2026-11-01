import { Role } from './enums/role.enums.js';

export class User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: Role;
  active: boolean;
}
