import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./Dropdown";

const Header = ({user}) => {
	return (
		<header className="sticky top-0 bg-slate-50 pb-4 z-10">
			<nav className="flex items-center justify-between w-full px-10">
				<>
					<Link href="/">
						<Image src="/svg/airbnb-ar21.svg" width={102} height={32} alt="airbnb logo" />
					</Link>
				</>
				<>
					<ul className="flex">
						<li className="hover:bg-neutral-200 px-4 py-2.5 rounded-full">
							<Link href="/">Stays</Link>
						</li>
						<li className="hover:bg-neutral-200 px-4 py-2.5 rounded-full">
							<Link href="/">Experiences</Link>
						</li>
						<li className="hover:bg-neutral-200 px-4 py-2.5 rounded-full">
							<Link href="/">Online Experiences</Link>
						</li>
					</ul>
				</>
				<>
					<ul className="flex items-center">
						<li>
							<Link href="/yourRooms" className="hover:bg-neutral-200 px-4 py-2.5 rounded-full">
								Airbnb your home
							</Link>
						</li>
						<li>
							<button className="hover:bg-neutral-200 px-4 py-2.5 rounded-full">
								<Image src="/svg/globe-2-svgrepo-com.svg" width={16} height={16} alt="Language" />
							</button>
						</li>
						<li>
							<DropdownMenu user={user} />
						</li>
					</ul>
				</>
			</nav>
			<div className="grid grid-cols-12">
				<div className="col-start-3 col-span-8 flex justify-between items-center border border-neutral-300 rounded-full">
					<div className="w-full">
						<p className="hover:bg-neutral-200 py-5 px-8 rounded-full">Where</p>
					</div>
					<div className="w-full">
						<p className="hover:bg-neutral-200 py-5 px-8 rounded-full">Check in</p>
					</div>
					<div className="w-full">
						<p className="hover:bg-neutral-200 py-5 px-8 rounded-full">Check out</p>
					</div>
					<div className="w-full flex justify-around items-center">
						<p className="hover:bg-neutral-200 py-5 px-8 rounded-full flex items-center">Who</p>
						<button className="w-28 rounded-full bg-rose-500 size-12 flex gap-2 justify-center items-center">
							<Image src="/svg/search-svgrepo-com.svg" width={16} height={16} alt="Search" />
							<p className="text-slate-50">Search</p>
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
