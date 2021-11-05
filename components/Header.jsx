import React, { useContext } from 'react';

import Link from 'next/link';

const cats = [
	{ name: 'React', slug: 'react' },
	{ name: 'Web Development', slug: 'web-dev' },
];

const Header = () => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<div className="border-b w-full inline-block border-blue-400 py-8">
				<div className="md:float-left block">
					<Link href="/">
						<span className="cursor-pinter font-bold text-4xl text-white">GraphCMS</span>
					</Link>
				</div>
				<div className="hidden md:float-left md:contents">
					{cats.map((cat) => (
						<Link href={`/category/${cat.slug}`} key={cat.slug}>
							<span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
								{cat.name}
							</span>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;
