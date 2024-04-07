"use client";

import React, {useEffect, useState} from "react";
import {auth} from "@/lib/firebase";

const user = () => {
	const [user, setUser] = useState("");

	useEffect(() => {
		const userProfile = auth.onAuthStateChanged((user) => {
			setUser(user);
		});
		return () => userProfile;
	});

	return (
		<section className="px-10 h-screen bg-slate-50">
			<p>Hello {user.email}</p>
		</section>
	);
};

export default user;
