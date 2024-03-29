"use client";

import React from "react";
import {useState} from "react";
import Link from "next/link";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	console.log(email);
	console.log(password);

	const handleLogin = async ($e) => {
		$e.preventDefault();
		alert(`Email: ${email}`);
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
					<form className="space-y-6" action="#" method="POST" onSubmit={handleLogin}>
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
									value={email}
									onChange={($e) => setEmail($e.target.value)}
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
									value={password}
									onChange={($e) => setPassword($e.target.value)}
									className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
						<div>
							<div className="flex items-center justify-between">
								<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
									Repeat your Password
								</label>
							</div>
							<div className="mt-2">
								<input
									id="repeat-password"
									name="repeat-password"
									type="password"
									required
									value={password}
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

export default Login;
