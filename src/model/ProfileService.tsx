declare const BASE_URL: string;

export default class ProfileService {

  async getUserDetails() {
    
    try {
      const res = await fetch(BASE_URL + '/users/1')

      if (res.status >= 400)
        throw new Error('something went wrong');

      const user = await res.json();
      return user;
    } catch (err) {
      console.warn(err);
    }
  }
}