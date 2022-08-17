export interface Course {
  id: number
  type: string
  title: string
  slug: string
  description: string
  coverImage: string
  isActif: string
  likes: number
  isLike: boolean
  rating: number
  cycle: Cycle
  level: Level
  matiere: Matiere
  contents: Content[]
  comments: any[]
  exercices: any[]
  quizzes: any[]
  users: User[]
  created_at: string
  updated_at: string
}

export interface Cycle {
  id: number
  name: string
  slug: string
  diplome: any
  isActif: string
}

export interface Level {
  id: number
  slug: string
  name: string
  isActif: string
}

export interface Matiere {
  id: number
  slug: string
  name: string
  isActif: string
}

export interface Content {
  id: number
  content: string
  type_content: string
}

export interface User {
  user_id: number
  pseudo: string
  slug: string
  email_verified_at: boolean
  has_password: boolean
  firstname: any
  lastname: any
  telephone: string
  bio: string
  gender: string
  email: string
  country: string
  url_image: string
  birthday: string
  createdAt: string
  roles: Role[]
  isResquestProfs: boolean
  followers: number
  following: number
  user_followers: any[]
  user_following: any[]
}

export interface Role {
  id: number
  name: string
}

