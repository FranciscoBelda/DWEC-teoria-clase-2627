export interface Usuario {
  nombre: string;
  edad: number;
}

export type Role = 'admin' | 'customer' | 'guest';

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  phoneNumber?: string;
}

export type Superpower = 'fly' | 'teleport' | 'fire';
export interface SpecialUser extends User {
  superpower: Superpower;
}

export interface CategoryInterface {
  id: number;
  name: string;
  active: boolean;
  icon: string;
}
