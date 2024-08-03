---
id: useFetch
title: useFetch
sidebar_label: useFetch
---

Fetch data from an API endpoint with the `useFetch` hook.

### Usage

```jsx live
function App() {
	const { data, loading, error, refetch } = useFetch(
		"https://jsonplaceholder.typicode.com/posts"
	);

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<div>
			<button onClick={refetch}>Refetch</button>
			<ul>
				{data?.map((post) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
		</div>
	);
}
```

### API

Parameters

- `url` : `string` - The URL of the API endpoint to fetch data from.
- `options` : `RequestInit` - An object containing any custom settings that you want to apply to the request. Defaults to `{}`.

  - `method` : `string` - The HTTP method to use for the request. Defaults to `GET`.
  - `headers` : `HeadersInit` - Any headers you want to include in the request.
  - `body` : `BodyInit` - The body of the request.

Returns : An object with the following properties:

- `data` : `any` - The data fetched from the API endpoint.
- `loading` : `boolean` - A boolean indicating whether the request is in progress.
- `error` : `Error | null` - An error object if the request fails, `null` otherwise.
- `refetch` : `() => void` - A function to refetch the data from the API endpoint.
