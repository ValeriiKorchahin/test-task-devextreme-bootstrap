export interface IUserInfo {
  gender: string,
  name: {
    first: string,
    last: string
  },
  location: {
    street: {
      name: string,
      number: number
    },
    city: string,
    country: string,
  },
  email: string,
  phone: string,
  picture: {
    large: string,
    medium: string
  }
}
