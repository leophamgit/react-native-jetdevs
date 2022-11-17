import { IUser } from "../../types/user";

export function fetchUsers(): Promise<{ data: IUser[] }> {
  return fetch("https://randomuser.me/api/?results=10", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => {
      return { data: json.results };
    });
}
