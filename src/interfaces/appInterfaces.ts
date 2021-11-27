export interface LoginRequest {
  email: string;
  password: string;
}

export interface TokenCheck extends User {}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  roles: string[];
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  rol: 'ADMINISTRATOR' | 'USER';
}
