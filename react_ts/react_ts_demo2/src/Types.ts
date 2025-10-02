

export type Info = {
  id: number,
  name: string,
  email: string
}

export type AdminInfoList = Info & {
  isAdmin: boolean
}


