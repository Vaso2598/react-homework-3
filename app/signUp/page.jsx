"use client";

import React from "react";
import {useState} from "react";
import {auth, db} from "@/lib/firebase";
import {createUserWithEmailAndPassword, updateProfile} from "firebase/auth";
import {doc, setDoc} from "firebase/firestore";

const SignUp = () => {
	const [email, setEmail] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	const handleSignUp = async ($e) => {
		$e.preventDefault();
		try {
			const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
			const id = userCredentials.user.uid;

			await updateProfile(auth.currentUser, userName);

			await setDoc(doc(db, "user", id), {
				email,
				userName,
				displayName: {userName},
			});
			window.location.href = "/";
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<section className="bg-slate-50">
			<div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Welcome to Airbnb
					</h2>
				</div>
				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="#" method="POST" onSubmit={handleSignUp}>
						<div>
							<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autoComplete="email"
									required
									onChange={($e) => setEmail($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="userName" className="block text-sm font-medium leading-6 text-gray-900">
									User Name
								</label>
							</div>
							<div className="mt-2">
								<input
									id="userName"
									name="userName"
									type="text"
									autoComplete="userName"
									required
									onChange={($e) => setUserName($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									required
									onChange={($e) => setPassword($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<button
								type="submit"
								className="flex w-full justify-center rounded-md bg-rose-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600">
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default SignUp;
