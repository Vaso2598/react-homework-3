"use client";

import React, {useState} from "react";
import {collection, doc, setDoc} from "firebase/firestore";
import {db, storage} from "@/lib/firebase";
import {ref, uploadBytes} from "firebase/storage";

const userRooms = () => {
	const [address, setAddress] = useState("");
	const [country, setCountry] = useState("");
	const [guests, setGuests] = useState("");
	const [price, setPrice] = useState("");
	const [description, setDescription] = useState("");
	const [image, setImage] = useState("");

	const handleSubmit = async ($e) => {
		$e.preventDefault();

		// Inputs
		const newRoomRef = doc(collection(db, "rooms"));

		const data = {
			address,
			country,
			guests,
			price,
			description,
		};

		await setDoc(newRoomRef, data);

		// Images
		const storageRef = ref(storage, "images");
		uploadBytes(storageRef, image).then((snapshot) => {
			console.log("Uploaded file:", snapshot.metadata.fullPath);
		});
		// console.log(data);
	};

	return (
		<section className="px-10 h-screen bg-slate-50 flex flex-col gap-4">
			<h1 className="text-2xl font-bold text-red-600">Add your Room</h1>
			<form method="POST" action="#" onSubmit={handleSubmit} className="flex flex-col gap-4">
				<div className="flex gap-4">
					<label htmlFor="" className="w-1/6">
						Address:
					</label>
					<input
						required
						type="text"
						id="address"
						onChange={($e) => setAddress($e.target.value)}
						className="border border-red-600 rounded-lg h-6 w-5/6"
					/>
				</div>
				<div className="flex gap-4">
					<label htmlFor="" className="w-1/6">
						Country:
					</label>
					<input
						required
						type="text"
						id="country"
						onChange={($e) => setCountry($e.target.value)}
						className="border border-red-600 rounded-lg h-6 w-5/6"
					/>
				</div>
				<div className="flex gap-4">
					<label htmlFor="" className="w-1/6">
						Number of guests:
					</label>
					<input
						required
						type="number"
						id="guests"
						min="1"
						max="20"
						step="1"
						onChange={($e) => setGuests($e.target.value)}
						className="border border-red-600 rounded-lg h-6 w-5/6"
					/>
				</div>
				<div className="flex gap-4">
					<label htmlFor="" className="w-1/6">
						Price per night:
					</label>
					<input
						required
						type="number"
						id="price"
						min="0"
						max="999"
						step="0.01"
						onChange={($e) => setPrice($e.target.value)}
						className="border border-red-600 rounded-lg h-6 w-5/6"
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="">Description:</label>
					<textarea
						name="Description"
						id="description"
						cols="30"
						rows="10"
						placeholder="Enter room description"
						onChange={($e) => setDescription($e.target.value)}
						className="border border-red-600 rounded-lg"></textarea>
				</div>
				<div className="flex justify-center gap-4">
					<label htmlFor="">Upload Image</label>
					<input
						required
						type="file"
						id="image"
						name="Image"
						accept="image/*"
						onChange={($e) => setImage($e.target.files[0])}
					/>
				</div>
				<div>
					<button
						type="submit"
						className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
						Add Room
					</button>
				</div>
			</form>
		</section>
	);
};

export default userRooms;
