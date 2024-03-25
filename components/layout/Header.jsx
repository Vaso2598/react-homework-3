import React from "react";
import Image from "next/image";
import Link from "next/link";
import DropdownMenu from "./Dropdown";

const Header = () => {
	return (
		<header className="sticky top-0 bg-slate-50">
			<nav className="flex justify-between px-10 py-2 items-center w-screen">
				<Link href="/">
					<Image src="/svg/airbnb-ar21.svg" width={102} height={32} alt="airbnb logo" />
				</Link>
				<div>
					<ul className="flex justify-between gap-4">
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
				</div>
				<div className="flex gap-4 items-center">
					<Link href="/" className="hover:bg-neutral-200 px-4 py-2.5 rounded-full">
						Airbnb your home
					</Link>
					<button className="hover:bg-neutral-200 px-4 py-2.5 rounded-full">
						<Image src="/svg/globe-2-svgrepo-com.svg" width={16} height={16} alt="Language" />
					</button>
					<DropdownMenu />
				</div>
			</nav>
			<div className="flex justify-center">
				<div className="flex justify-between items-center border max-w-3xl border-neutral-300 rounded-full">
					<div>
						<p className="hover:bg-neutral-200 py-5 px-8 rounded-full">Where</p>
					</div>
					<div>
						<p className="hover:bg-neutral-200 py-5 px-8 rounded-full">Check in</p>
					</div>
					<div>
						<p className="hover:bg-neutral-200 py-5 px-8 rounded-full">Check out</p>
					</div>
					<div>
						<p className="hover:bg-neutral-200 py-5 px-8 rounded-full flex items-center">
							Who
							<button className="rounded-full bg-rose-500 size-12 flex justify-center items-center">
								<Image src="/svg/search-svgrepo-com.svg" width={16} height={16} alt="Search" />
							</button>
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
