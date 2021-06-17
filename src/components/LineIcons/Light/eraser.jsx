import React from 'react';

function Eraser(props) {
	const title = props.title || "eraser";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 61H29.2c.9-.6 1.7-1.3 2.5-2.1l31.1-31.3c1.5-1.5 1.5-3.8 0-5.2L41.5 1.1c-1.4-1.4-3.8-1.4-5.2 0L5.1 32.3c-6.8 6.8-6.8 17.8 0 24.6l2 2c3.3 3.3 7.7 5.1 12.4 5.1.4 0 .7 0 1-.1.1 0 .2.1.4.1h41.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zM38.4 3.2c.3-.3.7-.3 1 0l21.4 21.4c.3.3.3.7 0 1L35.7 50.7 13.3 28.4 38.4 3.2zM7.2 54.8C4.5 52.1 3 48.5 3 44.6s1.5-7.5 4.2-10.2l4-4 22.4 22.4-3.9 3.9c-2.7 2.7-6.3 4.2-10.1 4.2-3.9 0-7.5-1.5-10.3-4.2l-2.1-1.9z"/>
	</g>
</svg>
	);
};

export default Eraser;