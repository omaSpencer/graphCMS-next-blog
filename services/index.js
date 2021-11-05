import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
	const query = gql`
		query posts {
			posts {
				author {
					name
					id
					photo {
						url
					}
				}
				excerpt
				id
				slug
				title
				createdAt
				categories {
					slug
					name
					id
				}
				content {
					html
				}
				featuredImage {
					id
					url
				}
			}
		}
	`;

	const result = await request(graphqlAPI, query);

	return result.posts;
};
