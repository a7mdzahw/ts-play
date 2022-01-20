interface Request {
  body?: object;
  configs?: RequestInit;
}

export function client<T>(endpoint: string, { body, ...configs }: Request = {}) {
  return fetch(`https://jsonplaceholder.typicode.com${endpoint}`, {
    method: body ? "POST" : "GET",
    body: JSON.stringify(body),
    ...configs,
  }).then(async (res) => {
    if (res.ok) return await res.json() as T;
    else throw res.json()
  });
}
