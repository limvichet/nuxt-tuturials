export interface User {
  id: number;
  name: string;
  email: string;
  email_verified_at?: string | null;
  active: number;
  status: string;
  location_code: string | null;
  created_at: string;
  updated_at: string;
}

export type LoginRES = {
  user: User;
  token: string;
  message: string;
  code: number;
};