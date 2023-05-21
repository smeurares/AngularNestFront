export interface LoginUserInterface {
  email: string,
  password: string,
}

export interface UserInterface {
  id?: string
  name?: string,
  email: string,
  password: string,
  role?: string,
  boughtProducts?: string[],
  access_token?: string
}


