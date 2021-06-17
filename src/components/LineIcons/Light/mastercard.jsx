import React from 'react';

function Mastercard(props) {
	const title = props.title || "mastercard";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 13.9h-61c-.8 0-1.5.7-1.5 1.5v33.1c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V15.4c0-.8-.7-1.5-1.5-1.5zM61 47.1H3V16.9h58v30.2z"/>
		<path d="M26 42.4c2 0 3.9-.5 5.5-1.6 1.8 1.2 3.9 2 6.1 2 6 0 10.8-4.9 10.8-10.8s-4.9-10.8-10.8-10.8c-2.2 0-4.4.7-6.1 2-1.7-1.2-3.5-1.7-5.5-1.7-5.8 0-10.5 4.7-10.5 10.5S20.2 42.4 26 42.4zM37.6 24c4.4 0 8.1 3.6 8.1 8.1.1 4.5-3.5 8.1-8 8.1-1.5 0-2.8-.4-3.9-1 1.7-1.9 2.8-4.3 2.8-7-.1-2.8-1.1-5.3-2.8-7 1.1-.8 2.4-1.2 3.8-1.2z"/>
	</g>
</svg>
	);
};

export default Mastercard;