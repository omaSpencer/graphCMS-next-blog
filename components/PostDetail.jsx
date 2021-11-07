import React from 'react';
import moment from 'moment';

const PostDetail = ({ post }) => {
	const {
		title,
		featuredImage,
		author,
		createdAt,
		content: {
			raw: { children },
		},
	} = post;

	const getContentFragment = (index, text, obj, type) => {
		let modifiedText = text;

		if (obj) {
			if (obj.bold) {
				modifiedText = <strong key={index}>{text}</strong>;
			}

			if (obj.italic) {
				modifiedText = <em key={index}>{text}</em>;
			}

			if (obj.underline) {
				modifiedText = <u key={index}>{text}</u>;
			}
		}

		switch (type) {
			case 'heading-three':
				return (
					<h3 key={index} className="text-xl font-semibold mb-4">
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h3>
				);
			case 'paragraph':
				return (
					<p key={index} className="mb-8">
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</p>
				);
			case 'heading-four':
				return (
					<h4 key={index} className="text-md font-semibold mb-4">
						{modifiedText.map((item, i) => (
							<React.Fragment key={i}>{item}</React.Fragment>
						))}
					</h4>
				);
			case 'image':
				return <img key={index} alt={obj.title} height={obj.height} width={obj.width} src={obj.src} />;
			default:
				return modifiedText;
		}
	};

	return (
		<article className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
			<div className="relative overflow-hidden shadow-mb mb-6">
				<img src={featuredImage.url} alt={title} className="object-top h-full w-full rounded-t-lg" />
			</div>
			<div className="px-4 lg:px-0">
				<div className="flex mb-8 w-full">
					<div className="flex flex-1 items-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
						<img
							className="align-middle rounded-full"
							src={author?.photo?.url}
							height="30px"
							width="30px"
							alt={author?.name}
						/>
						<p className="inline align-middle text-gray-700 ml-2 text-lg">{author?.name}</p>
					</div>
					<div className="font-medium text-gray-700">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 inline mr-2 text-pink-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
							/>
						</svg>
						<span className="align-middle">{moment(createdAt).format('MMM DD, YYYY')}</span>
					</div>
				</div>
				<h1 className="mb-8 text-3xl font-semibold">{title}</h1>
				{children.map((typeObj, idx) => {
					const children = typeObj.children.map((item, itemIdx) =>
						getContentFragment(itemIdx, item.text, item)
					);

					return getContentFragment(idx, children, typeObj, typeObj.type);
				})}
			</div>
		</article>
	);
};

export default PostDetail;
