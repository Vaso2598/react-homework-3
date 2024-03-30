"use client";

import {getData} from "@/lib/api";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import Card from "@/components/card/Card";

export default function Room() {
	const [data, setData] = useState([]);
	const [filteredData, setFilteredData] = useState([]);
	useEffect(() => {
		getData("records?limit=20")
			.then((data) => {
				setData(data?.results);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);

	// console.log(data)
	const params = useParams();

	// console.log(params);

	useEffect(() => {
		if (data.length > 0) {
			// Filter data based on record.Id
			const filtered = data.filter((record) => record.id === parseInt(params.roomId));
			setFilteredData(filtered);
		}
	}, [data, params.roomId]);

	return (
		<main className="min-h-screen p-24 bg-slate-50">
			<section className="flex flex-wrap gap-4 justify-center">
				<p>{params.roomId}</p>
				{/* Render filtered data */}
				{filteredData.map((record) => (
					<Card key={record.id} data={record} />
				))}
			</section>
		</main>
	);
}
