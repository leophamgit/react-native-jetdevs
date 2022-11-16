// INFO*: data structure follow UserFormat in
// https://randomuser.me/documentation

export interface IUser {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
  };
  picture: { thumbnail: string };
  login: { uuid: string };
  isFavorite?: boolean;
}
