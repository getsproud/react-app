import React from 'react';

function BricksAlt(props) {
	const title = props.title || "bricks alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59 35.5H46.9v-6.8c0-2.1-1.7-3.8-3.8-3.8H25.8v-6.8c0-2.1-1.7-3.8-3.8-3.8H5c-2.1 0-3.8 1.7-3.8 3.8v7.6c0 .4.1.7.2 1-.1.3-.2.6-.2 1v8.6c0 .4.1.7.2 1-.1.3-.2.6-.2 1v7.5c0 2.1 1.7 3.8 3.8 3.8h18.1c.4 0 .7-.1 1-.2.3.1.6.2 1 .2h19.1c.4 0 .7-.1 1-.2.3.1.6.2 1 .2H59c2.1 0 3.8-1.7 3.8-3.8v-6.5c0-2.1-1.7-3.8-3.8-3.8zm-15.6-6.8v6.8H25.8v-7.1h17.3c.2.1.3.2.3.3zm-38.6-.2h17.6v7.1H4.8v-7.1zm0-10.3c0-.1.1-.3.3-.3h17.1c.1 0 .3.1.3.3V25H4.8v-6.8zm0 27.6V39h17.6v7H5c-.1.1-.2 0-.2-.2zm21-6.8h17.6v7H25.8v-7zm33.5 6.8c0 .1-.1.3-.3.3H46.9v-7H59c.1 0 .3.1.3.3v6.4z"/>
	</g>
</svg>
	);
};

export default BricksAlt;