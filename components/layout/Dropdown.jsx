"use client";

import {useEffect, useState} from "react";
import Link from "next/link";
import {auth} from "@/lib/firebase";

const DropdownMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [user, setUser] = useState(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleLogout = async () => {
		try {
			await auth.signOut();
		} catch {
			console.error("Error signing out:", error);
		}
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setUser(user);
		});
		return () => unsubscribe(); // Cleanup function
	}, []);

	// console.log(user);

	return (
		<div className="relative">
			<button onClick={toggleMenu} className="hover:drop-shadow-lg">
				<div className="flex justify-around w-20 h-12 border border-neutral-300 rounded-full">
					<img src="/svg/burger-menu-svgrepo-com.svg" width="16" height="16" alt="user menu" />
					<img src="/svg/profile-user-svgrepo-com.svg" width="32" height="32" alt="user menu" />
				</div>
			</button>
			{isOpen && (
				<menu className="absolute bg-slate-50 w-64 py-3 right-px z-10 border border-neutral-300 rounded-lg">
					<li className="hover:bg-neutral-200 px-3 py-1">
						{user ? (
							<Link href="/user" className="block">
								{user.email || "User"}
							</Link>
						) : (
							<Link href="/signUp" className="block">
								Sign up
							</Link>
						)}
					</li>
					<li className="hover:bg-neutral-200 px-3 py-1">
						{user ? (
							<Link href="/" className="block" onClick={handleLogout}>
								Log out
							</Link>
						) : (
							<Link href="/login" className="block">
								Log in
							</Link>
						)}
					</li>
					<li className="hover:bg-neutral-200 px-3 py-1">
						<Link href="/" className="block">
							Gift cards
						</Link>
					</li>
					<li className="hover:bg-neutral-200 px-3 py-1">
						<Link href="/" className="block">
							Airbnb your home
						</Link>
					</li>
					<li className="hover:bg-neutral-200 px-3 py-1">
						<Link href="/" className="block">
							Help center
						</Link>
					</li>
				</menu>
			)}
		</div>
	);
};

export default DropdownMenu;
