import { gql } from '@apollo/client';

export const GET_POSTS = gql `
    query getPosts($order: PostsOrder, $first: Int, $after: String) {
        posts (order: $order, first: $first, after: $after) {
                pageInfo {
                    endCursor
                }
                edges {
                    cursor
                    node {
                        id
                        tagline
                        url
                        thumbnail {
                            url
                        }
                        user {
                            username
                        }
                        votesCount
                        commentsCount
                        name
                        createdAt
                    }
                }
                pageInfo {
                    endCursor
                }
            }
    }
`;