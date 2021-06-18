import React from 'react';

function SearchStore(props) {
	const title = props.title || "search store";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.6 14.3L50.4 3.9c-1-1.6-2.7-2.6-4.6-2.6H18.2c-1.9 0-3.7 1-4.6 2.6L7.4 14.3c-.2.3-.2.6-.2.9v7c0 2.4 1.3 4.5 3.3 5.5v18.8c0 3 2.4 5.4 5.4 5.4h7.7c.3.4.7.9 1.1 1.2 2.4 2.4 5.6 3.8 9.1 3.8 2.8 0 5.5-.9 7.7-2.6l7.9 7.9c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5L44 51.9h4.2c3 0 5.4-2.4 5.4-5.4V27.7c2-1.1 3.3-3.1 3.3-5.5v-7c-.1-.3-.1-.6-.3-.9zm-9.2-8.6l5.9 10v6.5c0 1.5-1.2 2.8-2.8 2.8H48c-1.5 0-2.8-1.2-2.8-2.8v-5.7c0-.2 0-.4-.1-.5L41.6 4.7h4.2c.7 0 1.3.4 1.6 1zm-17.2-1v17.5c0 1.5-1.2 2.8-2.8 2.8H25c-1.5 0-2.8-1.2-2.8-2.8v-5.4l3.9-12.1h4.1zm3.5 0h4.2l3.9 12.1v5.4c0 1.5-1.2 2.8-2.8 2.8h-2.5c-1.5 0-2.8-1.2-2.8-2.8V4.7zm-23 11l5.9-10c.3-.6.9-.9 1.6-.9h4.2L18.8 16c-.1.2-.1.4-.1.5v5.7c0 1.5-1.2 2.8-2.8 2.8h-2.5c-1.5 0-2.8-1.2-2.8-2.8v-6.5zm16.4 35c-.5-.5-.9-1-1.2-1.5-2.4-3.6-1.9-8.5 1.2-11.7 1.8-1.8 4.2-2.7 6.6-2.7 2.4 0 4.8.9 6.6 2.7 1.8 1.8 2.7 4.1 2.7 6.6 0 1.8-.5 3.6-1.5 5.1 0 0 0 .1-.1.1-.3.5-.7 1-1.2 1.4-1.8 1.8-4.1 2.7-6.6 2.7-2.4 0-4.7-1-6.5-2.7zm21.1-2.3h-2.4c.5-1.4.8-2.8.8-4.3 0-3.4-1.3-6.6-3.8-9.1-5-5-13.1-5-18.1 0-3.6 3.6-4.6 8.9-3 13.4h-5.8c-1 0-1.9-.8-1.9-1.9v-18h1.9c1.8 0 3.4-.7 4.5-1.9 1.1 1.2 2.8 1.9 4.5 1.9h2.5c1.8 0 3.4-.7 4.5-1.9 1.1 1.2 2.8 1.9 4.5 1.9H39c1.8 0 3.4-.8 4.5-2 1.1 1.2 2.8 2 4.5 2h2v18.1c0 1-.8 1.8-1.8 1.8z"/>
	</g>
</svg>
	);
};

export default SearchStore;