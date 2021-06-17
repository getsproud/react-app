import React from 'react';

function Cradle(props) {
	const title = props.title || "cradle";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 8.9c-1 0-1.8.8-1.8 1.8v9.7H4.8v-9.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v42.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9.6h54.5v9.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V10.7c-.1-1-.9-1.8-1.9-1.8zm-27.2 15h11.8v16.3H33.8V23.9zm-3.5 16.3H18.6V23.9h11.8v16.3zM4.8 23.9h10.3v16.3H4.8V23.9zm44.3 16.3V23.9h10.2v16.3H49.1z"/>
	</g>
</svg>
	);
};

export default Cradle;