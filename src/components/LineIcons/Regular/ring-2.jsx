import React from 'react';

function Ring2(props) {
	const title = props.title || "ring 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M38.2 15.2l2.8-4.9c.3-.5.3-1.2 0-1.8L37.3 2c-.3-.5-.9-.9-1.5-.9h-7.5c-.6 0-1.2.3-1.5.9L23 8.6c-.3.5-.3 1.2 0 1.8l2.8 4.9c-10.4 2.7-18 12.2-18 23.4C7.8 52 18.6 62.9 32 62.9s24.2-10.8 24.2-24.2c0-11.3-7.7-20.8-18-23.5zM29.3 4.8h5.4l2.7 4.7-2.7 4.7h-5.4l-2.7-4.7 2.7-4.7zM32 59.3c-11.4 0-20.7-9.3-20.7-20.7S20.6 17.9 32 17.9s20.7 9.3 20.7 20.7S43.4 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default Ring2;