import React from 'react';
import { useRouter } from 'next/router';
import { getPosts, getPostDetails } from '../../services';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader } from '../../components';

const PostDetails = ({ post }) => {
	const router = useRouter();

	if (router.isFallback || !post) {
		return <Loader />;
	}

	const { slug, author, categories } = post;

	return (
		<article className="container mx-auto px-10 mb-8">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="col-span-1 lg:col-span-8">
					<PostDetail post={post} />
					<Author author={author} />
					<CommentsForm slug={slug} />
					<Comments slug={slug} />
				</div>
				<div className="col-span-1 lg:col-span-4">
					<div className="relative lg:sticky top-8">
						<PostWidget slug={slug} categories={categories.map((cat) => cat.slug)} />
						<Categories />
					</div>
				</div>
			</div>
		</article>
	);
};

export default PostDetails;

export async function getStaticProps({ params }) {
	const data = (await getPostDetails(params.slug)) || {};

	return {
		props: { post: data },
	};
}

export async function getStaticPaths() {
	const posts = await getPosts();

	return {
		paths: posts.map(({ slug }) => ({ params: { slug } })),
		fallback: true,
	};
}
