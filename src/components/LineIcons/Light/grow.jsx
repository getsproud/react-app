import React from 'react';

function Grow(props) {
	const title = props.title || "grow";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.9 8.8c-.1-1.4-1.2-2.4-2.6-2.5-2.5-.2-7.2 0-10.5 3.2-1 1-1.8 2.2-2.4 3.5-.1-2.6-.7-6.1-3-8.6-3-3.4-8-4-10.8-4C33.2.4 32 1.5 31.9 3c-.2 2.9-.1 8.3 2.9 11.6 2.4 2.7 6.2 3.3 8.9 3.3 1.1 0 2.1-.1 2.7-.2v16.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-10h.1c2.8 0 8-.5 11.1-3.6 3.5-3.2 3.5-8.5 3.3-11.4zm-18.5 6.1c-2 .2-6.1.2-8.3-2.2-2.3-2.5-2.3-7.2-2.1-9.3 2 .1 6.1.5 8.3 3 2.2 2.5 2.3 6.5 2.1 8.5zm13.2 3.2c-2.4 2.4-6.9 2.7-9 2.7.2-2.2.9-6.8 3.4-9.2 2.4-2.4 6.2-2.5 7.9-2.3.2 1.9.2 6.4-2.3 8.8z"/>
		<path d="M58.4 47.5c-1.2-3.9-5.1-6.1-8.9-5.1-4 1.2-9.6 2.8-13.3 3.9.8-1.7.7-3 .3-3.9-.8-2.1-3.2-3.1-5.2-3.1H21c-1 0-2.1-.5-3.1-1.4-1-.9-2.3-1.4-3.6-1.4H5.9c-3.3 0-5.9 2.8-5.9 6.2v13.2c0 3.5 2.7 6.3 6 6.3h10c1.2 0 2.5-.4 3.5-1.2l.4.2c2.8 1.6 6 2.4 9.2 2.4 2 0 3.9-.3 5.7-.9L53.4 57c5.2-1.8 5.9-6.2 5-9.5zM17 59c-.3.1-.6.2-1 .2H6c-1.7 0-3-1.5-3-3.3V42.7c0-1.8 1.3-3.2 2.9-3.2h8.3c.6 0 1.2.2 1.6.6.4.3.8.7 1.2.9v18zm35.6-4.8L34 59.9c-1.5.5-3.1.7-4.8.7-2.7 0-5.4-.7-7.8-2l-1.4-.7h-.1V42.3c.3 0 .6.1 1 .1h10.3c1.1 0 2.2.5 2.4 1.2.3.8-.4 2.3-2 3.9-.3.3-.6.6-.7 1-.5 1 .3 2.1 1.4 1.9 1.5-.2 4.1-.9 9.2-2.4l8.8-2.6c2.2-.6 4.4.7 5.2 3.1.4 1.2.8 4.3-2.9 5.7z"/>
	</g>
</svg>
	);
};

export default Grow;