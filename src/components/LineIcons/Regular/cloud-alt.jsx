import React from 'react';

function CloudAlt(props) {
	const title = props.title || "cloud alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.5 51.8h-37c-6.8 0-12.3-5.4-12.3-12.1 0-6.7 5.5-12.1 12.3-12.1 1.2 0 2.4.2 3.6.5 0-.4-.1-.9-.1-1.4C17 18.6 23.7 12 31.9 12s14.9 6.6 14.9 14.7c0 .5 0 .9-.1 1.4 1.2-.3 2.4-.5 3.6-.5 6.8 0 12.3 5.4 12.3 12.1.2 6.7-5.4 12.1-12.1 12.1zm-37-20.6c-4.8 0-8.8 3.8-8.8 8.6 0 4.7 3.9 8.6 8.8 8.6h36.9c4.8 0 8.8-3.8 8.8-8.6 0-4.7-3.9-8.6-8.8-8.6-1.8 0-3.6.6-5.1 1.6-.6.4-1.5.4-2.1-.1-.6-.5-.8-1.3-.6-2 .5-1.2.7-2.5.7-3.9 0-6.1-5.1-11.2-11.4-11.2-6.3 0-11.4 5-11.4 11.2 0 1.3.2 2.6.7 3.9.3.7 0 1.5-.6 2s-1.4.5-2.1.1c-1.4-1.1-3.1-1.6-5-1.6z"/>
	</g>
</svg>
	);
};

export default CloudAlt;