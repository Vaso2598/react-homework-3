"use client";

import {getData} from "@/lib/api";
import {useEffect, useState} from "react";
import {useParams} from "next/navigation";
import Details from "@/components/roomDetails/Details";

export default function Room() {
	const [filteredData, setFilteredData] = useState([]);
	const params = useParams();
	useEffect(() => {
		getData("records?limit=20")
			.then((data) => {
				const newData = data?.results.filter((data) => data.id === params.roomId);
				setFilteredData(newData);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);

	// console.log(filteredData);

	return (
		<main className="min-h-screen p-10 bg-slate-50">
			<section className="flex">
				{filteredData.map((record) => (
					<Details key={record.id} record={record} />
				))}
			</section>
		</main>
	);
}
