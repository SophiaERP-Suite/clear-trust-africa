// export interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   userRole: string;
//   organisationId: number;
//   organisationName: string;
//   organisationType: string;
//   roleScope: number;
// }

// export interface AuthData {
//   token: string;
//   user: User;
// }

// export interface AuthContextType {
//   user: User | null;
//   login: (data: AuthData) => void;
//   loadUser: (data: User) => void;
//   logout: () => void;
// }

export interface MfaSession {
  userId: number;
  organisationId: number;
  expiresAt: number;
}

export interface AuthUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userRole: string;
  organisationId: number;
  organisationName: string;
  organisationType: string;
  roleScope: number;
}

export interface AuthData {
  token: string;
  user: AuthUser;
}

export interface AuthContextType {
  authData: AuthData | null;
  mfaSession: MfaSession | null;
  setAuthData: (data: AuthData | null) => void;
  setMfaSession: (data: MfaSession | null) => void;
  logout: () => void;
}

