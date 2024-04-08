import React from "react";
import Image from "next/image";
import getRating from "@/lib/rating";

const Card = ({record}) => {
	const roomId = record.id;

	console.log(record);
	return (
		<section className="flex flex-col gap-4 w-full">
			<section className="flex gap-4">
				<section className="w-1/2">
					{record.xl_picture_url ? (
						<Image
							src={record?.xl_picture_url}
							width={500}
							height={500}
							style={{objectFit: "cover"}}
							alt={record.smart_location}
							className="w-screen rounded-xl"
						/>
					) : (
						<Image
							src="/placeholderImg/cat_in_currents.png"
							width={500}
							height={500}
							style={{objectFit: "cover"}}
							alt={record.smart_location}
							className="w-screen rounded-xl"
						/>
					)}
				</section>
				<section className="w-1/2 flex flex-col gap-3">
					<h1 className="font-semibold text-2xl">
						{record.name}, {record.country}
					</h1>
					<div className="flex flex-row gap-2 text-lg">
						<p>{record.guests_included} guests •</p>
						<p>{record.bedrooms} bedroom •</p>
						<p>{record.beds} bed •</p>
						<p>{record.bathrooms} bath</p>
					</div>
					<div className="flex items-center gap-4">
						<Image src={record.host_picture_url} width={150} height={150} className="rounded-full size-10"></Image>
						<div>
							<p className="font-semibold">Hosted by {record.host_name}</p>
							<p>Host since {record.host_since}</p>
						</div>
					</div>
				</section>
			</section>
			<section className="flex flex-col gap-2">
				<h2 className="font-semibold text-xl">Information about this room</h2>
				<p>{record.description}</p>
			</section>
		</section>
	);
};

export default Card;
