import React from 'react';

function ListAlt(props) {
	const title = props.title || "list alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M11.7 3.1H5c-2.1 0-3.8 1.7-3.8 3.8v6.7c0 2.1 1.7 3.8 3.8 3.8h6.7c2.1 0 3.8-1.7 3.8-3.8V6.8c-.1-2.1-1.8-3.7-3.8-3.7zm.2 10.4c0 .1-.1.3-.3.3H5c-.1 0-.3-.1-.3-.3V6.8c0-.1.1-.3.3-.3h6.7c.1 0 .3.1.3.3v6.7z"/>
		<path d="M25.5 11.9H61c1 0 1.8-.8 1.8-1.8S62 8.4 61 8.4H25.5c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
		<path d="M11.7 24.3H5c-2.1 0-3.8 1.7-3.8 3.8v6.7c0 2.1 1.7 3.8 3.8 3.8h6.7c2.1 0 3.8-1.7 3.8-3.8v-6.7c-.1-2.1-1.8-3.8-3.8-3.8zm.2 10.5c0 .1-.1.3-.3.3H5c-.1 0-.3-.1-.3-.3v-6.7c0-.1.1-.3.3-.3h6.7c.1 0 .3.1.3.3v6.7z"/>
		<path d="M61 29.7H25.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M11.7 46.7H5c-2.1 0-3.8 1.7-3.8 3.8v6.7C1.2 59.3 2.9 61 5 61h6.7c2.1 0 3.8-1.7 3.8-3.8v-6.7c-.1-2.1-1.8-3.8-3.8-3.8zm.2 10.5c0 .1-.1.3-.3.3H5c-.1 0-.3-.1-.3-.3v-6.7c0-.1.1-.3.3-.3h6.7c.1 0 .3.1.3.3v6.7z"/>
		<path d="M61 52.1H25.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default ListAlt;