import React from 'react';

function BaloonAlt1(props) {
	const title = props.title || "baloon alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.8 21.8c0-.5 0-1-.1-1.5v-.1C52.9 9 43.5 0 32 0 20 0 10.2 9.8 10.2 21.8c0 22.4 14 29.4 19.4 31.3l-8.2 8.2c-.4.4-.6 1.1-.3 1.6.2.6.8.9 1.4.9h19.1c.6 0 1.2-.4 1.4-.9s.1-1.2-.3-1.6l-8.2-8.2c5.3-1.8 19.3-8.8 19.3-31.3zM19.2 42.2c-1.7-2.2-3.2-5-4.3-8.5l35.9-11.2c-.1 4-.6 7.5-1.4 10.5l-30.2 9.2zm-6-19.9l34.1-11.4c1.8 2.4 2.9 5.3 3.3 8.5L14.1 30.8c-.5-2.5-.9-5.3-.9-8.5zM32 3c5.1 0 9.8 2.1 13.2 5.4L13.4 19.1C14.8 10 22.6 3 32 3zm-6 58l6-6 6 6H26zm6-10.2c-1.2-.3-6.2-1.6-10.7-6.1l26.8-8.2C43.4 47.7 33.8 50.4 32 50.8z"/>
	</g>
</svg>
	);
};

export default BaloonAlt1;