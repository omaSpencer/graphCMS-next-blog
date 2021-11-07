import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
	const { photo, name, bio } = author;

	return (
		<div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
			<div className="absolute left-0 right-0 -top-14">
				<Image
					className="align-middle rounded-full object-contain"
					src={photo?.url}
					alt={name}
					height="100px"
					width="100px"
					unoptimized
				/>
			</div>
			<h3 className="text-white py-4 text-xl font-bold">{name}</h3>
			<p className="text-white text-lg">{bio}</p>
		</div>
	);
};

export default Author;
