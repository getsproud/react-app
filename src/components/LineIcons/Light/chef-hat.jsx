import React from 'react';

function ChefHat(props) {
	const title = props.title || "chef hat";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.9 11.7C45.8 4.8 39.4 0 32 0S18.2 4.8 16.1 11.7C7.9 13.2 1.9 20.4 1.9 28.8v.2c.1 6.4 5 11.7 11.4 12.4l.3 19.3c0 1.8 1.5 3.3 3.3 3.3h30.3c1.8 0 3.3-1.5 3.3-3.2l.5-19.4c6.4-.7 11.2-6.1 11.2-12.6-.1-8.4-6.1-15.6-14.3-17.1zM47.2 61H16.9c-.1 0-.3-.1-.3-.3l-.1-5.3h31l-.1 5.3c0 .2-.1.3-.2.3zM50 38.5c-1.1.1-2 1-2.1 2.1l-.3 11.9H16.5l-.2-11.9c0-1.1-.9-2.1-2.1-2.1-5.2-.3-9.3-4.5-9.3-9.6v-.1c0-7.2 5.4-13.4 12.6-14.3l1-.1.2-1C20.2 7.3 25.7 3 32 3c6.3 0 11.8 4.3 13.3 10.4l.2 1 1 .1c7.2.9 12.6 7.1 12.6 14.3 0 5.1-4 9.4-9.1 9.7z"/>
	</g>
</svg>
	);
};

export default ChefHat;