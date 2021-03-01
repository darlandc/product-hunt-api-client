import React, { useState, useEffect } from 'react';
import Post from './Post';
import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { GET_POSTS } from '../queries';
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

const WrapperList = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 20px 0;
`;

const List = (props) => {

	const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
		variables: {
			order: props.option,
		},
	});
	const [posts, setPosts] = React.useState({
		posts: []
	});

	function fetchMorePosts(data) {
		const { endCursor } = data.posts.pageInfo;

		fetchMore({
			variables: { after: endCursor },
			updateQuery: (prevResult, { fetchMoreResult }) => {
				fetchMoreResult.posts.edges = [...prevResult.posts.edges, ...fetchMoreResult.posts.edges];
				return fetchMoreResult;
			},
		});
	}

	useEffect(() => {
		const onScroll = () => {
			const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
			if (bottom) {
				fetchMorePosts(data);
			}
		};
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	});

	if (loading || !data) {
		if (error) {
			return <Alert severity="error" className="error">API error ): Try again later!</Alert>
		} else {
			return <CircularProgress/>;
		}
	}

	if (data) {
		let posts = data.posts.edges || [];
		return (
			<>
				<WrapperList>
					{posts.map((post) => (
						<Post key={post.node.id} postInfo={post.node} />
					))}
				</WrapperList>
			</>
		);
	}
	setPosts({
		posts
	})
};
export default List;