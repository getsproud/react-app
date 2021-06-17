import React from 'react';

function Male(props) {
	const title = props.title || "male";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.5 25.5V5.1l4.9 4.9c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1L33.2.5c-.6-.6-1.5-.6-2.1 0l-7.4 7.4c-.6.6-.6 1.5 0 2.1.6.6 1.5.6 2.1 0l4.9-4.9v20.4c-9.9.8-17.8 9.1-17.8 19.2C12.7 55.3 21.4 64 32 64s19.3-8.7 19.3-19.3c0-10.1-7.9-18.4-17.8-19.2zM32 61c-9 0-16.3-7.3-16.3-16.3S23 28.4 32 28.4s16.3 7.3 16.3 16.3S41 61 32 61z"/>
	</g>
</svg>
	);
};

export default Male;