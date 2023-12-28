import axios from "axios";

export async function makeHttpRequest<T>(options: {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
}): Promise<T> {
  const { url, method = "GET" } = options;
  const { data } = await axios({ url, method });
  return data;
}
