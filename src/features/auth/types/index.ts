export type AuthUser = {
  id: string
  name: string
  email: string
}

export type UserResponse = {
  accessToken: string
  user: AuthUser
}
