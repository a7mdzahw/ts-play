export function client(
  endpoint: string,
  { body, ...configs }: RequestInit = {}
) {
  return fetch(`http://jsonplaceholder.com/${endpoint}`, {
    method: body ? "POST" : "GET",
    ...configs,
  });
}

client("ahmed");
