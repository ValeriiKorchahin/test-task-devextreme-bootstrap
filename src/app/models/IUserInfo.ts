export interface IUserInfo {
  gender: string,
  name: {
    first: string,
    last: string
  },
  location: {
    street: {
      name: string
    },
    city: string,
    country: string,
  },
  email: string,
  phone: string,
  picture: {
    large: string,
  }
}
