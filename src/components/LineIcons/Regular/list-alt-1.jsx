import React from 'react';

function ListAlt1(props) {
	const title = props.title || "list alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M13.8 8.3H5c-2.1 0-3.8 1.7-3.8 3.8v8.8c0 2.1 1.7 3.8 3.8 3.8h8.8c2.1 0 3.8-1.7 3.8-3.8v-8.8c-.1-2.1-1.8-3.8-3.8-3.8zm.2 12.5c0 .1-.1.3-.3.3H5c-.1 0-.3-.1-.3-.3V12c0-.1.1-.3.3-.3h8.8c.1 0 .3.1.3.3v8.8z"/>
		<path d="M13.8 39.4H5c-2.1 0-3.8 1.7-3.8 3.8V52c0 2.1 1.7 3.8 3.8 3.8h8.8c2.1 0 3.8-1.7 3.8-3.8v-8.8c-.1-2.1-1.8-3.8-3.8-3.8zm.2 12.5c0 .1-.1.3-.3.3H5c-.1 0-.3-.1-.3-.3v-8.8c0-.1.1-.3.3-.3h8.8c.1 0 .3.1.3.3v8.8z"/>
		<path d="M28.6 13.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H28.6c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
		<path d="M61 19.1H28.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M61 41.4H28.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M61 50.2H28.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default ListAlt1;