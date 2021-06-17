import React from 'react';

function Cool20(props) {
	const title = props.title || "cool 20";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M48.2 22H15.8c-.7 0-1.3.7-1.3 1.5v7.8c0 1.7 1.2 3.1 2.6 3.1h9.5c1.3 0 2.8-1.5 2.8-3.3V27h5v4.2c0 1.8 1.1 3.3 2.4 3.3h10c1.4 0 2.6-1.4 2.6-3.1v-7.8c.1-.9-.5-1.6-1.2-1.6z"/>
	</g>
</svg>
	);
};

export default Cool20;