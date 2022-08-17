export interface Cycle {
  id: number
  name: string
  slug: string
  diplome: any
  isActif: string
  levels: Level[]
}

export interface Level {
  id: number
  name: string
  slug: string
  isActif: string
  matieres: Matiere[]
}

export interface Matiere {
  id: number
  name: string
  slug: string
  isActif: string
}
