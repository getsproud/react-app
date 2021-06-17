import React from 'react';

function BulbAlt(props) {
	const title = props.title || "bulb alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.7 24.6C55.7 11 45.1 0 32 0S8.3 11 8.3 24.6c0 9.7 5.4 18.5 13.9 22.5V57c0 3.9 2.8 7 6.3 7h7.1c3.4 0 6.3-3.2 6.3-7v-9.9c8.3-4 13.8-12.8 13.8-22.5zM35.6 61h-7.1c-1.8 0-3.3-1.9-3.3-4v-9.6h13.6V57c0 2.1-1.5 4-3.2 4zm5-16.6H23.4C16 40.9 11.3 33.2 11.3 24.7 11.3 12.7 20.6 3 32 3s20.7 9.7 20.7 21.6c0 8.6-4.8 16.3-12.1 19.8z"/>
		<path d="M35.8 17.1c-.6-.6-1.5-.6-2.1 0l-5.5 5.5c-.6.6-.6 1.5 0 2.1l4.5 4.5-4.5 4.5c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4s.8-.1 1.1-.4l5.5-5.5c.6-.6.6-1.5 0-2.1l-4.5-4.5 4.5-4.5c.5-.6.5-1.5-.1-2.1z"/>
	</g>
</svg>
	);
};

export default BulbAlt;