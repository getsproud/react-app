import React from 'react';

function Giftbox(props) {
	const title = props.title || "giftbox";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 2.7H6c-2.6 0-4.8 2.1-4.8 4.8v12.2c0 1 .8 1.8 1.8 1.8h1.8v35c0 2.6 2.1 4.8 4.8 4.8h44.9c2.6 0 4.8-2.1 4.8-4.8v-35H61c1 0 1.8-.8 1.8-1.8V7.5c-.1-2.6-2.2-4.8-4.8-4.8zM8.3 56.5v-35h21.9v36.3H9.6c-.7 0-1.3-.6-1.3-1.3zm47.4 0c0 .7-.6 1.3-1.3 1.3H33.8V21.5h21.9v35zM59.2 18H4.8V7.5c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3V18z"/>
	</g>
</svg>
	);
};

export default Giftbox;