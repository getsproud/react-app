import React from 'react';

function Mountain(props) {
	const title = props.title || "mountain";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 56.2l-29-50.1c-.3-.5-.9-.9-1.5-.9s-1.2.3-1.5.9l-29 50.1c-.5.8-.2 1.9.6 2.4.9.4 1.9.2 2.4-.7l17.7-30.6 3.6 4.3c.3.4.8.6 1.3.6s1-.2 1.3-.6l3.5-4.2 3.5 4.2c.3.4.8.6 1.3.6s1-.2 1.3-.6l3.6-4.3 17.7 30.6c.3.6.9.9 1.5.9.3 0 .6-.1.9-.2 1-.5 1.3-1.6.8-2.4zM36.9 27.8l-3.5-4.2c-.3-.4-.8-.6-1.3-.6s-1 .2-1.3.6l-3.5 4.2-3.1-3.7L32 10.4 39.9 24l-3 3.8z"/>
	</g>
</svg>
	);
};

export default Mountain;