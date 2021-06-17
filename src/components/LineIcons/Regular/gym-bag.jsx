import React from 'react';

function GymBag(props) {
	const title = props.title || "gym bag";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.4 24.3h-3.2v-8.4c0-4.9-4-8.9-8.9-8.9h-4.6c-4.9 0-8.9 4-8.9 8.9v8.4h-3.2c-9 0-16.4 7.3-16.4 16.4 0 9 7.3 16.4 16.4 16.4h28.8c9 0 16.4-7.3 16.4-16.4 0-9.1-7.4-16.4-16.4-16.4zm-22.1-8.4c0-3 2.4-5.4 5.4-5.4h4.6c3 0 5.4 2.4 5.4 5.4v8.4H24.3v-8.4zm-6.7 11.9H46.4c7.1 0 12.9 5.8 12.9 12.9 0 .6-.1 1.2-.1 1.7H4.9c-.1-.6-.1-1.1-.1-1.7 0-7.1 5.7-12.9 12.8-12.9zm28.8 25.7H17.6c-5.2 0-9.7-3.1-11.8-7.6h52.3c-2 4.5-6.5 7.6-11.7 7.6z"/>
	</g>
</svg>
	);
};

export default GymBag;