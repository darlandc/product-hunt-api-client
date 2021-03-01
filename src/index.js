import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ApolloProvider, ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

const PH_API_HOST = 'https://api.producthunt.com/v2/api/graphql';
const TOKEN = '0G5f8cuvXeZcVvmScZV-XL_ZLf8LzoWbMwhZAjS5nIk';

const client = new ApolloClient({
	link: new HttpLink({
		uri: PH_API_HOST,
		headers: {
			Authorization: `Bearer ${TOKEN}`,
		},
	}),
	cache: new InMemoryCache(),
});

ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);