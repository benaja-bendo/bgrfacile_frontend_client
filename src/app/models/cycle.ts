export interface Cycle {
  id?: number
  name?: string
  slug?: string
  levels?: Level[]
}

export interface Level {
  id?: number
  name?: string
  slug?: string
  matieres?: Matiere[]
}

export interface Matiere {
  id?: number
  name?: string
  slug?: string
}
