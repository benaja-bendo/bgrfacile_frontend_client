export interface User {
  id ?: number;
  name ?: string;
  slug ?: string;
  email ?: string;
  first_name ?: string;
  last_name ?: string;
  image_path ?: string;
  address ?: string;
  genre ?: string;
  city ?: string;
  phone ?: string;
  roles ?: Role[];
  demandes ?: any[];
  ecoles ?: any[];
  updated_at ?: number;
  created_at ?: number;
  email_verified_at ?: boolean
  has_password ?: boolean
  firstname ?: any
  lastname ?: any
  telephone ?: string
  bio ?: string
  gender ?: string
  country ?: string
  url_image ?: string
  birthday ?: string
  createdAt ?: string
  isResquestProfs ?: boolean
  followers ?: number
  following ?: number
  user_followers ?: any[]
  user_following ?: any[]
}

export interface Role {
  id: number
  name: string
}
