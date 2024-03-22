"use client"

import { getData } from "@/lib/api"
import { useEffect, useState } from "react";
import Card from "@/components/houseCard/Card"

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

	// console.log(data)

	return (
		<main className="min-h-screen p-24">
			<section className="flex flex-wrap gap-4">
			{data?.map((record) => (
				<Card key={record.id} record={record}/>
			))}
			</section>
		</main>
	);
}
