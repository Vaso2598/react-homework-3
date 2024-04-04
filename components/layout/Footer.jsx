import React from "react";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-slate-50">
			<nav className="px-10 divide-y-2">
				<div className="flex justify-start gap-32">
					<div className="flex flex-col gap-2">
						<h3>
							<b>Support</b>
						</h3>
						<menu className="flex flex-col gap-2">
							<li className="hover:underline">
								<Link href="/">Help Center</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">AirCover</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Anti-discrimination</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Disability Support</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Cancellation options</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Report neighborhood concern</Link>
							</li>
						</menu>
					</div>
					<div className="flex flex-col gap-2">
						<h3>
							<b>Hosting</b>
						</h3>
						<menu className="flex flex-col gap-2">
							<li className="hover:underline">
								<Link href="/">Airbnb your home</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">AirCover for Hosts</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Hosting resources</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Community forum</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Hosting responsibly</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Airbnb-friendly apartments</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Join a free Hosting class</Link>
							</li>
						</menu>
					</div>
					<div className="flex flex-col gap-2">
						<h3>
							<b>Airbnb</b>
						</h3>
						<menu className="flex flex-col gap-2">
							<li className="hover:underline">
								<Link href="/">Newsroom</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">New features</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Careers</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Investors</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Gift cards</Link>
							</li>
							<li className="hover:underline">
								<Link href="/">Airbnb.org emergency stays</Link>
							</li>
						</menu>
					</div>
				</div>
				<br />
				<div className="flex flex-row gap-8">
					<h3>© 2024 Airbnb, Inc.</h3>
					<ul className="flex flex-row gap-8 list-disc">
						<li className="hover:underline">
							<Link href="/">Terms</Link>
						</li>
						<li className="hover:underline">
							<Link href="/">Sitemap</Link>
						</li>
						<li className="hover:underline">
							<Link href="/">Privacy</Link>
						</li>
						<li className="hover:underline">
							<Link href="/">Your Privacy Choices</Link>
						</li>
					</ul>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
