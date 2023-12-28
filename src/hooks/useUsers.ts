import { useQuery } from "@tanstack/react-query";

import { makeHttpRequest } from "../utils/apiUtils";
import { User } from "../types/UserDto";

export function useUsers() {
  const { data: users, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      makeHttpRequest<User[]>({
        url: "https://jsonplaceholder.typicode.com/users?_start=0&_limit=6",
      }),
  });

  return {
    users,
    isLoading,
  };
}
