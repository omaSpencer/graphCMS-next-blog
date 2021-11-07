import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
	const [relatedPosts, setRelatedPosts] = useState([]);

	useEffect(() => {
		if (slug) {
			getSimilarPosts(category, slug).then((result) => setRelatedPosts(result));
		} else {
			getRecentPosts().then((result) => setRelatedPosts(result));
		}
	}, [slug]);

	return (
		<div className="bg-white shadow-lg rounded-lg p-8 mb-8">
			<h3 className="text-xl mb-8 font-semibold border-b pb-4">{slug ? 'Releated Posts' : 'Recent Posts'}</h3>
			{relatedPosts.map(({ title, featuredImage, createdAt }) => (
				<div className="flex items-center w-full mb-4" key={title}>
					<div className="w-16 flex-none">
						<img
							className="align-middle rounded-full"
							src={featuredImage.url}
							alt={title}
							width="60px"
							height="60px"
						/>
					</div>
					<div className="flex-grow ml-4">
						<p className="text-gray-500 text-xs">{moment(createdAt).format('MMM DD, YYYY')}</p>
						<Link href={`/post/${slug}`} className="text-md" key={title}>
							{title}
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default PostWidget;
