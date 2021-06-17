import React from 'react';

function Cabinet1(props) {
	const title = props.title || "cabinet 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.7 1.3H9.3c-1 0-1.8.7-1.8 1.7s.8 1.8 1.8 1.8h3V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4.6h32.5V61c0 1 .8 1.8 1.8 1.8S52 62 52 61V4.8h3c1 0 1.8-.8 1.8-1.8s-1.1-1.7-2.1-1.7zm-6.4 51.6H15.7V4.8h32.5v48.1z"/>
		<path d="M26.3 26.5h11.4c2.6 0 4.8-2.1 4.8-4.8v-4.5c0-2.6-2.1-4.8-4.8-4.8H26.3c-2.6 0-4.8 2.1-4.8 4.8v4.5c0 2.7 2.2 4.8 4.8 4.8zM25 17.2c0-.7.6-1.3 1.3-1.3h11.4c.7 0 1.3.6 1.3 1.3v4.5c0 .7-.6 1.3-1.3 1.3H26.3c-.7 0-1.3-.6-1.3-1.3v-4.5z"/>
		<path d="M26.3 45.4h11.4c2.6 0 4.8-2.1 4.8-4.8v-4.5c0-2.6-2.1-4.8-4.8-4.8H26.3c-2.6 0-4.8 2.1-4.8 4.8v4.5c0 2.6 2.2 4.8 4.8 4.8zM25 36.1c0-.7.6-1.3 1.3-1.3h11.4c.7 0 1.3.6 1.3 1.3v4.5c0 .7-.6 1.3-1.3 1.3H26.3c-.7 0-1.3-.6-1.3-1.3v-4.5z"/>
	</g>
</svg>
	);
};

export default Cabinet1;