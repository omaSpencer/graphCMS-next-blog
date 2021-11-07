import Head from 'next/head';
import { Categories, PostWidget, PostCard } from '../components';
import { getPosts } from '../services';
import { FeaturedPosts } from '../sections';

const Home = ({ posts }) => {
	return (
		<div className="container mx-auto px-10 mb-8">
			<Head>
				<title>CMS BLog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<FeaturedPosts />

			<main className="grid grid-cols-1 lg:grid-cols-12 gap-12">
				<div className="lg:col-span-8 col-span-1">
					{posts.map((post, idx) => (
						<PostCard post={post} key={idx} />
					))}
				</div>

				<div className="lg:col-span-4 col-span-1">
					<div className="lg:sticky relative top-8">
						<PostWidget />
						<Categories />
					</div>
				</div>
			</main>
		</div>
	);
};

export default Home;

export async function getStaticProps() {
	const posts = (await getPosts()) || [];

	return {
		props: { posts },
	};
}
