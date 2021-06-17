import React from 'react';

function Pointer(props) {
	const title = props.title || "pointer";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62 49.5L49.3 19.7c-1-2.3-2.8-4.1-5-5L14.5 2C10.8.4 6.8 1.2 4 4S.4 10.8 2 14.5l12.7 29.7c1 2.3 2.8 4.1 5 5L49.5 62c1.2.5 2.5.8 3.8.8 2.5 0 4.8-1 6.7-2.8 2.7-2.9 3.5-6.9 2-10.5zM5.3 13.2C4.1 10.4 5.2 8 6.6 6.6c1-1 2.5-1.8 4.2-1.8.8 0 1.6.2 2.4.5L42.9 18c.2.1.3.2.5.2L18.2 43.3c-.1-.2-.2-.3-.2-.5L5.3 13.2zm52.2 44.3c-1.4 1.4-3.9 2.5-6.6 1.3L21.1 46.1c-.2-.1-.3-.2-.5-.2l25.2-25.2c.1.2.2.3.2.5l12.7 29.7c1.2 2.7.2 5.2-1.2 6.6z"/>
	</g>
</svg>
	);
};

export default Pointer;