"use client"

import { getData } from "@/lib/api"
import { useEffect, useState } from "react";

export default function Home() {
	const [data, setData] = useState([])
	useEffect(() => {
		getData("records?limit=20")
		.then((data) => {
			setData(data?.results)
		})
		.catch((error) => {
			console.error("Error:", error)
		})
	}, [])

	console.log(data)

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Welcome to Booking with Next.js</h1>
		</main>
	);
}
