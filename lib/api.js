export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getData(path) {
	const result = await fetch(`${API_URL}/${path}`);

	if (!result.ok) {
		throw new Error("Failed to fetch data");
	}

	return result.json();
}
