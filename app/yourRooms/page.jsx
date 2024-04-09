"use client";

import {useEffect, useState} from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import {db} from "@/lib/firebase";
import {collection, getDocs} from "firebase/firestore";

const page = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getRooms = async () => {
			const roomRef = collection(db, "rooms");
			const roomSnapshot = await getDocs(roomRef);
			const roomList = roomSnapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setData(roomList);
		};
		getRooms();
	}, []);

	console.log(data);

	return (
		<section className="p-10 bg-slate-50">
			<div className="flex flex-col gap-4">
				<button
					type="submit"
					className="flex w-32 justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
					<Link href="/yourRooms/addRooms">Add Room</Link>
				</button>
				<div className="flex gap-4">
					{data.map((room) => (
						<div key={room.id} className="rounded-lg">
							<div className="relative size-96">
								<Image src={room?.imageURL} alt={room.address} fill className="rounded-lg"></Image>
							</div>
							<h3 className="font-bold text-xl">
								{room.address}, {room.country}
							</h3>
							<p>${room.price} night</p>
							<p>Maximum number of guests {room.guests}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default page;
