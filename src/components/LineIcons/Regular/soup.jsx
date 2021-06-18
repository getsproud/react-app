import React from 'react';

function Soup(props) {
	const title = props.title || "soup";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.7 28.6a4.1 4.1 0 0 0-3.1-1.4H5.5c-1.2 0-2.3.5-3.1 1.4-.8.9-1.2 2-1.1 3.2.9 9.5 6.3 18 14.5 22.9v.5c0 3 2.4 5.4 5.4 5.4h21.6c3 0 5.4-2.4 5.4-5.4v-.5c2.1-1.3 4.1-2.8 5.9-4.6 4.9-4.9 8-11.4 8.6-18.3.1-1.2-.2-2.3-1-3.2zM4.9 31c.1-.1.3-.2.5-.2h53.1c.2 0 .4.1.5.2.1.1.2.3.2.5-.2 2.1-.7 4.1-1.3 6H6c-.7-1.9-1.1-3.9-1.3-6 0-.3.2-.5.2-.5zm46.7 16.6c-1.8 1.8-3.8 3.3-6 4.5-.6.3-.9.9-.9 1.5v1.5c0 1.1-.9 1.9-1.9 1.9H21.2c-1.1 0-1.9-.9-1.9-1.9v-1.5c0-.6-.3-1.2-.9-1.5-4.8-2.6-8.5-6.5-10.9-11.1h48.9c-1.2 2.4-2.8 4.6-4.8 6.6z"/>
		<path d="M26.8 22c7.7 0 13.9-3.8 14.2-4.1L57.1 6.6c.8-.6 1-1.7.4-2.4-.6-.8-1.7-1-2.4-.4L43.3 12h-.5l-29.2-.1c-.5 0-.9.2-1.2.5-.3.3-.5.8-.5 1.2-.1 3.1 1.9 8.4 14.9 8.4zm11.6-6.6c-1.7.9-6.3 3.1-11.6 3.1-3.6 0-9.3-.5-11-3.2l22.6.1z"/>
	</g>
</svg>
	);
};

export default Soup;